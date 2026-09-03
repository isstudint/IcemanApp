// ponytail: flat state, flat functions, no classes
(function () {
  'use strict';

  // ── State ──
  const state = {
    screen: 'dashboard',
    mode: 'practice',
        domain: 'all',       // 'all' | 'identity' | 'storage' | 'compute' | 'networking' | 'monitor'
    questionCount: '40', // '20' | '40' | 'all' | <custom_number>
    questions: [],       // filtered question set for current quiz
    index: 0,            // current question index
    answers: [],         // user's selected answer per question (index or null)
    flagged: new Set(),
    timer: null,
    timeLeft: 6000,      // 100 min in seconds
    totalTime: 6000,
    history: [],
    seenQuestions: new Set(),
    qstats: {},          // global tracking per question id
    currentScore: null,
    toastTimer: null,
    confidences: [],     // 'high'|'medium'|'low'|null
    mistakes: [],        // mistake reasons per question
    showMistakePrompt: false,
    eliminations: {},    // { questionIndex: Set of eliminated choice indices }
    explorerDomain: 'all',
    explorerStatus: 'all',
    explorerVisible: 50,
  };

  // ── DOM shorthand ──
  const $ = id => document.getElementById(id);
  const escapeHtml = str => String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const formatMarkdown = text => {
    if (!text) return '';
    let html = escapeHtml(text);
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/\n\n+/g, '</p><p>');
    html = html.replace(/\n/g, '<br/>');
    return `<p>${html}</p>`;
  };

  const formatQuestionText = raw => {
    if (!raw) return '';
    let text = String(raw).trim();

    // 1. Strip boilerplate intro text from case studies
    const boilerplate = [
      /Introductory Info\s*Case study\s*-\s*This is a case study\..*?When you are ready to answer a question, click the Question button to return to the question\.\s*/is,
      /Introductory Info\s*Case study\s*-\s*This is a case study\..*?To start the case study\s*-\s*.*?(?=(?:Overview|Environment|Existing Environment|Requirements|Planned Changes))/is,
      /This is a case study\..*?When you are ready to answer a question, click the Question button to return to the question\.\s*/is
    ];
    for (const bp of boilerplate) {
      text = text.replace(bp, '');
    }
    text = text.trim();

    // Helper to format bullets and paragraphs
    const formatParagraphsAndBullets = content => {
      const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
      let html = '';
      let inUl = false;
      for (const line of lines) {
        if (/^(?:[\-\*\•\✑\?]|(?:\d+\.))\s+/.test(line)) {
          if (!inUl) {
            html += '<ul class="case-bullets">';
            inUl = true;
          }
          const cleaned = line.replace(/^(?:[\-\*\•\✑\?]|(?:\d+\.))\s+/, '');
          html += `<li>${escapeHtml(cleaned)}</li>`;
        } else {
          if (inUl) {
            html += '</ul>';
            inUl = false;
          }
          html += `<p class="case-p">${escapeHtml(line)}</p>`;
        }
      }
      if (inUl) html += '</ul>';
      return html;
    };

    // Check for Case Study
    const isCaseStudy = /\b(Overview|Existing Environment|Planned Changes|Technical Requirements)\b/i.test(text) &&
                        (/\bQuestion\b/i.test(text) || /Overview\s*-/i.test(text));

    // Check for Series Question
    const isSeries = /part of a series of questions/i.test(text);

    if (isCaseStudy) {
      let scenarioPart = text;
      let questionPart = '';

      const qMatch = text.match(/(?:\n|^)\s*Question\s*[\n\:\-]?\s*([\s\S]*)$/i);
      if (qMatch) {
        scenarioPart = text.slice(0, qMatch.index).trim();
        questionPart = qMatch[1].trim();
      }

      // Parse case sections
      const rawSections = scenarioPart.split(/\n(?=(?:General Overview|Overview|Existing Environment|Environment|Planned Changes|Technical Requirements|Requirements)\s*[-:])/i);

      let sectionsHtml = '';
      for (const s of rawSections) {
        const trimmed = s.trim();
        if (!trimmed) continue;
        const headerMatch = trimmed.match(/^((?:General Overview|Overview|Existing Environment|Environment|Planned Changes|Technical Requirements|Requirements)\s*[-:]\s*)([\s\S]*)$/i);
        if (headerMatch) {
          let title = headerMatch[1].replace(/[-:]/g, '').trim();
          const body = headerMatch[2].trim();
          if (!body) continue; // Skip empty section header
          title = title.replace(/^(?:General Overview|Overview)\s*(?:General Overview|Overview)?/i, '🏢 Overview');
          title = title.replace(/^(?:Existing Environment|Environment)\s*(?:Existing Environment|Environment)?/i, '🌐 Existing Environment');
          title = title.replace(/^(?:Planned Changes)\s*(?:Planned Changes)?/i, '📋 Planned Changes');
          title = title.replace(/^(?:Technical Requirements|Requirements)\s*(?:Technical Requirements|Requirements)?/i, '⚙️ Technical Requirements');

          sectionsHtml += `
            <div class="case-section">
              <div class="case-section-title">${title}</div>
              <div class="case-section-content">${formatParagraphsAndBullets(body)}</div>
            </div>
          `;
        } else {
          sectionsHtml += `
            <div class="case-section">
              <div class="case-section-title">🏢 Overview</div>
              <div class="case-section-content">${formatParagraphsAndBullets(trimmed)}</div>
            </div>
          `;
        }
      }

      let resHtml = `
        <div class="case-study-card">
          <div class="case-study-header">
            <div class="case-study-header-left">
              <span class="case-study-badge">📑 Case Study</span>
              <span class="case-study-title">Scenario Background</span>
            </div>
            <button class="case-toggle-btn" type="button" onclick="this.closest('.case-study-card').classList.toggle('collapsed')">
              <span class="toggle-text-hide">Hide Scenario ▲</span>
              <span class="toggle-text-show">Show Scenario ▼</span>
            </button>
          </div>
          <div class="case-study-body">
            ${sectionsHtml}
          </div>
        </div>
      `;

      if (questionPart) {
        resHtml += `
          <div class="case-question-box">
            <div class="case-question-badge">❓ Question</div>
            <div class="case-question-text">${escapeHtml(questionPart)}</div>
          </div>
        `;
      }
      return resHtml;
    }

    if (isSeries) {
      let seriesNote = 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution.';
      let rest = text;

      const noteMatch = text.match(/^(Note:\s*This question is part of a series of questions[\s\S]*?these questions will not appear in the review screen\.)\s*([\s\S]*)$/i);
      if (noteMatch) {
        seriesNote = noteMatch[1].trim();
        rest = noteMatch[2].trim();
      }

      let scenarioText = rest;
      let solutionText = '';

      const solMatch = rest.match(/(Solution:\s*[\s\S]*?Does this meet the goal\?)\s*$/i);
      if (solMatch) {
        scenarioText = rest.slice(0, solMatch.index).trim();
        solutionText = solMatch[1].trim();
      }

      let resHtml = `
        <div class="series-note-banner">
          <span class="series-note-icon">ℹ️</span>
          <span class="series-note-text">${escapeHtml(seriesNote)}</span>
        </div>
        <div class="series-scenario-box">
          ${formatParagraphsAndBullets(scenarioText)}
        </div>
      `;

      if (solutionText) {
        let solClean = solutionText.replace(/^Solution:\s*/i, '');
        solClean = solClean.replace(/Does this meet the goal\?\s*$/i, '').trim();
        resHtml += `
          <div class="series-solution-card">
            <div class="series-solution-header">
              <span class="series-solution-badge">💡 Proposed Solution</span>
            </div>
            <div class="series-solution-body">${escapeHtml(solClean)}</div>
            <div class="series-solution-prompt">Does this meet the goal?</div>
          </div>
        `;
      }
      return resHtml;
    }

    // Standard Question formatting
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    let html = '';
    let inUl = false;
    for (const line of lines) {
      if (/^(?:[\-\*\•\✑\?]|(?:\d+\.))\s+/.test(line)) {
        if (!inUl) {
          html += '<ul class="q-bullet-list">';
          inUl = true;
        }
        const cleaned = line.replace(/^(?:[\-\*\•\✑\?]|(?:\d+\.))\s+/, '');
        html += `<li>${escapeHtml(cleaned)}</li>`;
      } else {
        if (inUl) {
          html += '</ul>';
          inUl = false;
        }
        html += `<p class="q-para">${escapeHtml(line)}</p>`;
      }
    }
    if (inUl) html += '</ul>';
    return html;
  };

  // ── Init ──
  function init() {
    loadHistory();
    renderDashboard();
    bindEvents();
  }

  // ── History (LocalStorage) ──
  function loadHistory() {
    try {
      const raw = JSON.parse(localStorage.getItem('az104_history') || '[]');
      state.history = raw.map((h, idx) => {
        if (!h.id) h.id = 'attempt_' + (Date.now() - (raw.length - idx) * 1000);
        return h;
      });
    } catch {
      state.history = [];
    }
    try {
      const seen = JSON.parse(localStorage.getItem('az104_seen') || '[]');
      state.seenQuestions = new Set(seen);
    } catch {
      state.seenQuestions = new Set();
    }
    try {
      const qs = JSON.parse(localStorage.getItem('az104_qstats') || '{}');
      state.qstats = qs;
    } catch {
      state.qstats = {};
    }
  }

  function saveHistory() {
    localStorage.setItem('az104_history', JSON.stringify(state.history.slice(-20)));
    localStorage.setItem('az104_seen', JSON.stringify(Array.from(state.seenQuestions)));
    localStorage.setItem('az104_qstats', JSON.stringify(state.qstats));
  }

  // ── Screen switching ──
  function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(name).classList.add('active');
    state.screen = name;
    window.scrollTo(0, 0);
  }

  // ── Dashboard ──
  function renderDashboard() {
    // Domain pills
    const pills = $('domain-pills');
    pills.innerHTML = `<button class="domain-pill ${state.domain === 'all' ? 'selected' : ''}" data-domain="all">All Modules</button>`;
    for (const [key, val] of Object.entries(DOMAINS)) {
      const isSel = state.domain === key ? 'selected' : '';
      pills.innerHTML += `<button class="domain-pill ${isSel}" data-domain="${key}">${val.short}</button>`;
    }

    // Update stats
    $('stat-total').textContent = QUESTIONS.length;
    $('stat-seen').textContent = state.seenQuestions.size;

    let totalAns = 0;
    let correctAns = 0;
    let mastered = 0;
    let needsReview = 0;
    let uncertain = 0;

    for (const [qid, s] of Object.entries(state.qstats)) {
      totalAns += (s.correct || 0) + (s.wrong || 0);
      correctAns += (s.correct || 0);
      
      const isMostlyCorrect = (s.correct || 0) >= (s.wrong || 0) && (s.correct || 0) > 0;
      const isMostlyWrong = (s.wrong || 0) > (s.correct || 0);
      
      if (s.lastConfidence === 'high' && isMostlyCorrect) mastered++;
      else if (s.lastConfidence === 'high' && isMostlyWrong) needsReview++;
      else if (s.lastConfidence === 'low' && isMostlyCorrect) uncertain++;
      else if (isMostlyWrong || (s.mistakeReasons && s.mistakeReasons.length > 0)) needsReview++;
    }

    $('stat-mastery').textContent = totalAns > 0 ? Math.round((correctAns / totalAns) * 100) + '%' : '0%';
    $('stat-mastered').textContent = mastered;
    $('stat-review').textContent = needsReview;
    $('stat-uncertain').textContent = uncertain;

    // Update weakness count
    const weakEl = $('weakness-count');
    if (weakEl) weakEl.textContent = getWeaknessPool().length;

    renderReadiness();
    renderHistory();
  }

  function getWeaknessPool() {
    const pool = [];
    const qMap = {};
    QUESTIONS.forEach(q => { qMap[q.id] = q; });

    for (const [qid, s] of Object.entries(state.qstats)) {
      if (!qMap[qid]) continue;
      const isMostlyWrong = (s.wrong || 0) > (s.correct || 0);
      const isLuckyGuess = s.lastConfidence === 'low' && (s.correct || 0) > 0;
      const isOverconfidentMiss = s.lastConfidence === 'high' && (s.wrong || 0) > 0 && isMostlyWrong;

      // Graduation: 2+ consecutive correct with high confidence
      if ((s.streak || 0) >= 2 && s.lastConfidence === 'high') continue;

      if (isMostlyWrong || isLuckyGuess || isOverconfidentMiss) {
        pool.push(qMap[qid]);
      }
    }
    return pool;
  }

  function renderReadiness() {
    const barsEl = $('readiness-bars');
    const scoreEl = $('readiness-score');
    const verdictEl = $('readiness-verdict');
    if (!barsEl) return;

    // AZ-104 official domain weights
    const weights = { identity: 0.20, storage: 0.15, compute: 0.20, networking: 0.25, monitor: 0.20 };

    // Build per-question domain map
    const qDomainMap = {};
    QUESTIONS.forEach(q => { qDomainMap[q.id] = q.domain; });

    // Calculate per-domain accuracy from qstats
    const domainStats = {};
    for (const key of Object.keys(DOMAINS)) {
      domainStats[key] = { correct: 0, total: 0 };
    }

    for (const [qid, s] of Object.entries(state.qstats)) {
      const domain = qDomainMap[qid];
      if (!domain || !domainStats[domain]) continue;
      domainStats[domain].correct += (s.correct || 0);
      domainStats[domain].total += (s.correct || 0) + (s.wrong || 0);
    }

    let html = '';
    let weightedScore = 0;
    let hasEnoughData = false;

    for (const [key, val] of Object.entries(DOMAINS)) {
      const ds = domainStats[key];
      const pct = ds.total >= 5 ? Math.round((ds.correct / ds.total) * 100) : -1;
      const cls = pct < 0 ? 'nodata' : pct >= 75 ? 'ready' : pct >= 60 ? 'borderline' : 'weak';
      const pctText = pct < 0 ? '—' : pct + '%';
      const barWidth = pct < 0 ? 0 : pct;

      if (pct >= 0) {
        weightedScore += (pct / 100) * (weights[key] || 0.20) * 1000;
        hasEnoughData = true;
      }

      html += `<div class="readiness-bar-item">
        <div class="readiness-bar-label">
          <span class="readiness-bar-name">${val.name}</span>
          <span class="readiness-bar-pct ${cls}">${pctText}${pct >= 0 ? ' (' + ds.correct + '/' + ds.total + ')' : ' (need 5+ answers)'}</span>
        </div>
        <div class="readiness-bar-track"><div class="readiness-bar-fill ${cls}" style="width:${barWidth}%"></div></div>
      </div>`;
    }

    barsEl.innerHTML = html;

    if (hasEnoughData) {
      const estScore = Math.round(weightedScore);
      scoreEl.textContent = '~' + estScore + ' / 1000';
      verdictEl.textContent = estScore >= 700 ? '✅ Likely Pass' : estScore >= 620 ? '⚠️ Borderline' : '❌ Needs Work';
      verdictEl.className = 'readiness-sublabel ' + (estScore >= 700 ? 'pass' : estScore >= 620 ? 'borderline' : 'fail');
    } else {
      scoreEl.textContent = '—';
      verdictEl.textContent = 'Need more data';
      verdictEl.className = 'readiness-sublabel';
    }
  }

  function renderHistory() {
    const list = $('history-list');
    if (!list) return;
    if (state.history.length === 0) {
      list.innerHTML = '<p class="no-history">No attempts yet. Start your first quiz!</p>';
      return;
    }
    list.innerHTML = state.history.slice().reverse().slice(0, 10).map(h => {
      const pass = h.percent >= 70;
      const modeLabel = h.mode === 'exam' ? '⏱️ Exam' : (h.mode === 'notes' ? '📚 Notes' : (h.mode === 'weakness' ? '🎯 Weakness' : '📝 Practice'));
      return `<div class="history-item" data-id="${h.id}">
        <div class="history-item-left">
          <span class="history-score ${pass ? 'pass' : 'fail'}">${h.percent}%</span>
          <div>
            <div style="font-weight:600; color:var(--text); font-size:0.875rem;">${h.domain || 'All Modules'} · ${modeLabel}</div>
            <div class="history-meta">${h.correct}/${h.total} correct · ${h.date}</div>
          </div>
        </div>
        <div class="history-item-right">
          <span class="history-review-btn">🔍 Review →</span>
          <button class="history-delete-btn" data-delete-id="${h.id}" title="Delete attempt">🗑️</button>
        </div>
      </div>`;
    }).join('');
  }

  function loadHistoryAttempt(attemptId) {
    const attempt = state.history.find(h => String(h.id) === String(attemptId));
    if (!attempt) return;

    if (Array.isArray(attempt.questions) && attempt.questions.length > 0) {
      state.questions = attempt.questions;
      state.answers = attempt.answers || [];
      state.flagged = new Set(attempt.flagged || []);
      state.mode = attempt.mode || 'exam';
      state.domain = 'all';
    } else {
      // Reconstruct for older attempts
      let pool = QUESTIONS.filter(q => q.type !== 'obsidian_mock');
      if (attempt.domain && attempt.domain !== 'All' && attempt.domain !== 'All Modules') {
        const dKey = Object.keys(DOMAINS).find(k => DOMAINS[k].short.toLowerCase() === String(attempt.domain).toLowerCase());
        if (dKey) pool = pool.filter(q => q.domain === dKey);
      }
      const count = Math.min(attempt.total || 30, pool.length);
      state.questions = pool.slice(0, count);
      state.answers = state.questions.map((q, i) => i < (attempt.correct || 0) ? q.correct : ((q.correct + 1) % q.choices.length));
      state.flagged = new Set();
      state.mode = attempt.mode || 'practice';
      state.domain = 'all';
    }

    const score = attempt.score || calculateScore();
    if (!score.domainScores) {
      score.domainScores = calculateScore().domainScores;
    }

    showResults(score);
    showToast(`📂 Opened attempt (${score.percent}%) from ${attempt.date}!`);
  }

  function recomputeSeenAndStatsFromHistory() {
    state.seenQuestions = new Set();
    state.qstats = {};

    state.history.forEach(attempt => {
      if (Array.isArray(attempt.questions)) {
        attempt.questions.forEach((q, i) => {
          state.seenQuestions.add(q.id);
          const isCorrect = attempt.answers && attempt.answers[i] === q.correct;
          const conf = attempt.confidences && attempt.confidences[i];
          const mistake = attempt.mistakes && attempt.mistakes[i];

          if (!state.qstats[q.id]) {
            state.qstats[q.id] = { correct: 0, wrong: 0, mistakeReasons: [] };
          }
          const stat = state.qstats[q.id];
          if (isCorrect) stat.correct++;
          else stat.wrong++;

          if (conf) stat.lastConfidence = conf;
          if (mistake) {
            if (!stat.mistakeReasons) stat.mistakeReasons = [];
            stat.mistakeReasons.push(mistake);
          }
        });
      }
    });
  }

  function deleteHistoryAttempt(attemptId) {
    state.history = state.history.filter(h => String(h.id) !== String(attemptId));
    recomputeSeenAndStatsFromHistory();
    saveHistory();
    renderDashboard();
    showToast('🗑️ Attempt removed & questions seen pool updated!');
  }

  function resetSeenPool() {
    state.seenQuestions.clear();
    saveHistory();
    renderDashboard();
    showToast('🔄 Questions seen pool has been reset to 0!');
  }

  function getFilteredQuestions() {
    let qs = QUESTIONS;
    if (state.mode === 'notes') {
      qs = qs.filter(q => q.type === 'obsidian_mock');
    } else {
      qs = qs.filter(q => q.type !== 'obsidian_mock');
    }
    if (state.domain !== 'all') {
      qs = qs.filter(q => q.domain === state.domain);
    }
    return qs;
  }

  // ── Start Quiz ──
  function startQuiz() {
    // Weakness mode: pull directly from weakness pool
    if (state.mode === 'weakness') {
      const weakPool = getWeaknessPool();
      if (weakPool.length === 0) {
        showToast('🎉 No weak questions! Keep practicing to find new ones.');
        return;
      }
      const shuffled = shuffle(weakPool);
      state.questions = shuffled.slice(0, Math.min(20, shuffled.length));
      state.index = 0;
      state.answers = new Array(state.questions.length).fill(null);
      state.confidences = new Array(state.questions.length).fill(null);
      state.mistakes = new Array(state.questions.length).fill(null);
      state.flagged = new Set();
      state.eliminations = {};
      state.timeLeft = state.totalTime;

      showScreen('quiz');
      renderQuestion();
      renderGrid();
      $('timer-container').classList.add('hidden');
      $('submit-btn').style.display = 'none';
      showToast('🎯 Weakness Drill: ' + state.questions.length + ' weak questions loaded!');
      return;
    }

    let filtered = getFilteredQuestions();
    if (filtered.length === 0) return;

    let limit = filtered.length;
    if (state.mode === 'practice' || state.mode === 'notes') {
      if (state.questionCount !== 'all') {
        const parsedLimit = parseInt(state.questionCount, 10);
        if (!isNaN(parsedLimit) && parsedLimit > 0) limit = parsedLimit;
      }
    } else if (state.mode === 'exam') {
      limit = 50;
    }

    // Safety: limit can never exceed available filtered questions
    limit = Math.min(limit, filtered.length);

    let unseen = filtered.filter(q => !state.seenQuestions.has(q.id));
    
    if (unseen.length < limit) {
      const filteredIds = new Set(filtered.map(q => q.id));
      state.seenQuestions = new Set([...state.seenQuestions].filter(id => !filteredIds.has(id)));
      saveHistory(); // persist the cleared subset
      unseen = filtered;
      showToast('You have seen all available questions in this module. Pool has been reset!');
    }

    // ponytail: shuffle for variety
    unseen = shuffle(unseen);
    filtered = unseen.slice(0, limit);

    state.questions = filtered;
    state.index = 0;
    state.answers = new Array(state.questions.length).fill(null);
    state.confidences = new Array(state.questions.length).fill(null);
    state.mistakes = new Array(state.questions.length).fill(null);
    state.flagged = new Set();
    state.eliminations = {};
    state.timeLeft = state.totalTime;

    showScreen('quiz');
    renderQuestion();
    renderGrid();

    // Timer for exam mode
    if (state.mode === 'exam') {
      $('timer-container').classList.remove('hidden');
      $('submit-btn').style.display = 'block';
      $('feedback').classList.add('hidden');
      startTimer();
    } else {
      $('timer-container').classList.add('hidden');
      $('submit-btn').style.display = 'none';
    }
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Render Question ──
  function renderQuestion() {
    const q = state.questions[state.index];
    $('q-counter').textContent = `${state.index + 1} / ${state.questions.length}`;
    $('q-domain').textContent = DOMAINS[q.domain].short;
    $('q-text').innerHTML = formatQuestionText(q.question);

    const imgContainer = $('q-image-container');
    if (imgContainer) {
      if (q.image) {
        imgContainer.innerHTML = `<img src="${q.image}" alt="Exam Diagram" class="q-image">`;
        imgContainer.classList.remove('hidden');
      } else {
        imgContainer.innerHTML = '';
        imgContainer.classList.add('hidden');
      }
    }

    const tableContainer = $('q-table-container');
    if (tableContainer) {
      if (q.table && Array.isArray(q.table.headers) && Array.isArray(q.table.rows)) {
        let tableHtml = '<table class="q-table"><thead><tr>';
        q.table.headers.forEach(h => { tableHtml += `<th>${escapeHtml(h)}</th>`; });
        tableHtml += '</tr></thead><tbody>';
        q.table.rows.forEach(r => {
          tableHtml += '<tr>';
          r.forEach(cell => { tableHtml += `<td>${escapeHtml(cell)}</td>`; });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';
        tableContainer.innerHTML = tableHtml;
        tableContainer.classList.remove('hidden');
      } else {
        tableContainer.innerHTML = '';
        tableContainer.classList.add('hidden');
      }
    }

    const choicesEl = $('choices');
    const isPractice = state.mode === 'practice' || state.mode === 'notes' || state.mode === 'weakness';
    const isExam = state.mode === 'exam';
    const hasAnswer = state.answers[state.index] !== null;
    const hasConf = state.confidences[state.index] !== null;
    const evaluated = isExam ? hasAnswer : (hasAnswer && hasConf);

    choicesEl.classList.remove('hidden');

    const elimSet = state.eliminations[state.index] || new Set();

    choicesEl.innerHTML = q.choices.map((c, i) => {
      let cls = 'choice-btn';
      if (hasAnswer && state.answers[state.index] === i) cls += ' selected';
      if (isPractice && evaluated) {
        cls += ' disabled';
        if (i === q.correct) cls += ' correct';
        else if (state.answers[state.index] === i && i !== q.correct) cls += ' wrong';
      }

      let letter = String.fromCharCode(65 + i);
      let text = c;
      const match = c.match(/^([A-F])[\.:\)]\s*(.*)$/i);
      if (match) {
        letter = match[1].toUpperCase();
        text = match[2];
      }

      const isEliminated = elimSet.has(i);
      const wrapCls = 'choice-btn-wrapper' + (isEliminated ? ' eliminated' : '');
      const showX = !evaluated;

      return `
        <div class="${wrapCls}" data-choice-index="${i}">
          <button class="${cls}" data-index="${i}">
            <span class="choice-letter">${letter}</span>
            <span class="choice-text">${escapeHtml(text)}</span>
          </button>
          ${showX ? `<button class="eliminate-x" data-elim="${i}" title="Eliminate this choice">✕</button>` : ''}
        </div>
      `;
    }).join('');

    // Mistake Classification (Practice Mode only): show ONLY if user evaluated, got it wrong, clicked Next, and hasn't classified yet
    const mistakeContainer = $('mistake-container');
    if (mistakeContainer) {
      if (isPractice && state.showMistakePrompt && state.mistakes[state.index] === null) {
        mistakeContainer.classList.remove('hidden');
        mistakeContainer.innerHTML = `
          <p class="section-title" style="margin-top:20px; font-size:0.95rem; color:var(--red);">Why did you get this wrong? <span style="font-weight:400;color:var(--text-muted);">(optional — click Skip to continue)</span></p>
          <div class="mistake-reasons">
            <button class="mistake-btn" data-reason="Knowledge gap">Knowledge gap</button>
            <button class="mistake-btn" data-reason="Misunderstood concept">Misunderstood concept</button>
            <button class="mistake-btn" data-reason="Misread question">Misread question</button>
            <button class="mistake-btn" data-reason="Confused Azure services">Confused Azure services</button>
            <button class="mistake-btn" data-reason="Config/detail mistake">Config/detail mistake</button>
            <button class="mistake-btn" data-reason="Guess">Guess</button>
            <button class="mistake-btn" data-reason="Careless mistake">Careless mistake</button>
            <button class="mistake-btn mistake-skip" data-reason="skip">Skip →</button>
          </div>
        `;
      } else {
        mistakeContainer.innerHTML = '';
        mistakeContainer.classList.add('hidden');
      }
    }

    // Feedback
    const fb = $('feedback');
    if (isPractice && evaluated) {
      const isCorrect = state.answers[state.index] === q.correct;
      fb.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
      const explanationText = q.explanation ? formatMarkdown(q.explanation) : (isCorrect ? '<p>Good job!</p>' : '<p>Incorrect.</p>');
      fb.innerHTML = `
        <div class="feedback-badge ${isCorrect ? 'correct' : 'wrong'}">
          ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
        </div>
        <div class="feedback-body">
          ${explanationText}
        </div>
      `;
    } else {
      fb.className = 'feedback hidden';
    }

    // Nav buttons — merge confidence into Next
    $('prev-btn').disabled = state.index === 0;
    const navRight = $('nav-right');
    const isLast = state.index === state.questions.length - 1;
    const finishLabel = isLast ? 'Finish' : 'Next →';

    if (isPractice && hasAnswer && !hasConf && !state.showMistakePrompt) {
      // Show confidence-aware next buttons
      navRight.innerHTML = `
        <button class="btn-conf-next conf-high" data-conf="high">Sure ✓</button>
        <button class="btn-conf-next conf-med" data-conf="medium">Maybe ~</button>
        <button class="btn-conf-next conf-low" data-conf="low">Guess ?</button>
      `;
    } else {
      navRight.innerHTML = `<button id="next-btn" class="btn-secondary">${finishLabel}</button>`;
    }

    // Flag button
    $('flag-btn').className = state.flagged.has(state.index) ? 'btn-flag flagged' : 'btn-flag';

    updateGrid();
  }

  // ── Select Answer ──
  function selectAnswer(choiceIndex) {
    const isPractice = state.mode === 'practice' || state.mode === 'notes' || state.mode === 'weakness';
    const evaluated = isPractice ? (state.answers[state.index] !== null && state.confidences[state.index] !== null) : false;
    if (evaluated) return;

    state.answers[state.index] = choiceIndex;
    state.showMistakePrompt = false;
    renderQuestion();
  }

  function toggleElimination(cIndex) {
    const isPractice = state.mode === 'practice' || state.mode === 'notes' || state.mode === 'weakness';
    const isExam = state.mode === 'exam';
    const hasAnswer = state.answers[state.index] !== null;
    const hasConf = state.confidences[state.index] !== null;
    const evaluated = isExam ? false : (hasAnswer && hasConf);
    if (evaluated) return;

    if (!state.eliminations[state.index]) {
      state.eliminations[state.index] = new Set();
    }
    const elimSet = state.eliminations[state.index];
    if (elimSet.has(cIndex)) {
      elimSet.delete(cIndex);
    } else {
      elimSet.add(cIndex);
      if (state.answers[state.index] === cIndex) {
        state.answers[state.index] = null;
      }
    }
    renderQuestion();
  }

  // Confidence is now captured via the Next buttons
  function selectConfidenceAndEvaluate(level) {
    if (state.confidences[state.index] !== null) return;
    state.confidences[state.index] = level;
    state.showMistakePrompt = false;
    renderQuestion(); // re-render to show feedback
  }

  function selectMistake(reason) {
    state.mistakes[state.index] = (reason === 'skip') ? null : reason;
    state.showMistakePrompt = false;
    advanceToNext();
  }

  // ── Navigation ──
  function advanceToNext() {
    if (state.index < state.questions.length - 1) {
      state.index++;
      state.showMistakePrompt = false;
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function goNext() {
    const isPractice = state.mode === 'practice' || state.mode === 'notes' || state.mode === 'weakness';
    const q = state.questions[state.index];
    const hasConf = state.confidences[state.index] !== null;
    const isWrong = state.answers[state.index] !== null && state.answers[state.index] !== q.correct;

    // In practice mode, if we just evaluated a wrong answer and haven't shown mistake prompt yet, show it
    if (isPractice && hasConf && isWrong && !state.showMistakePrompt && state.mistakes[state.index] === null) {
      state.showMistakePrompt = true;
      renderQuestion();
      return;
    }

    state.showMistakePrompt = false;
    advanceToNext();
  }

  function goPrev() {
    if (state.index > 0) {
      state.index--;
      renderQuestion();
    }
  }

  function goToQuestion(i) {
    state.index = i;
    renderQuestion();
  }

  // ── Question Grid ──
  function renderGrid() {
    const grid = $('question-grid');
    grid.innerHTML = state.questions.map((_, i) =>
      `<button class="q-grid-btn" data-qi="${i}">${i + 1}</button>`
    ).join('');
  }

  function updateGrid() {
    const buttons = $('question-grid').children;
    for (let i = 0; i < buttons.length; i++) {
      let cls = 'q-grid-btn';
      if (i === state.index) cls += ' current';
      if (state.answers[i] !== null) cls += ' answered';
      if (state.flagged.has(i)) cls += ' flagged';
      buttons[i].className = cls;
    }
  }

  // ── Timer ──
  function startTimer() {
    stopTimer();
    updateTimerDisplay();
    state.timer = setInterval(() => {
      state.timeLeft--;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        stopTimer();
        finishQuiz();
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timer) { clearInterval(state.timer); state.timer = null; }
  }

  function updateTimerDisplay() {
    const min = Math.floor(state.timeLeft / 60);
    const sec = state.timeLeft % 60;
    const display = $('timer-display');
    const fill = $('timer-fill');
    const pct = (state.timeLeft / state.totalTime) * 100;

    display.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
    fill.style.width = pct + '%';

    // Color warnings
    display.className = 'timer-display';
    fill.className = 'timer-fill';
    if (state.timeLeft < 300) { // <5min
      display.classList.add('danger');
      fill.classList.add('danger');
    } else if (state.timeLeft < 600) { // <10min
      display.classList.add('warning');
      fill.classList.add('warning');
    }
  }

  // ── Finish & Score ──
  function finishQuiz() {
    stopTimer();
    const score = calculateScore();
    saveAttempt(score);
    showResults(score);
  }

  function calculateScore() {
    let correct = 0;
    const domainScores = {};

    for (const key of Object.keys(DOMAINS)) {
      domainScores[key] = { correct: 0, total: 0 };
    }

    state.questions.forEach((q, i) => {
      if (!domainScores[q.domain]) {
        domainScores[q.domain] = { correct: 0, total: 0 };
      }
      domainScores[q.domain].total++;
      if (state.answers[i] === q.correct) {
        correct++;
        domainScores[q.domain].correct++;
      }
    });

    const total = state.questions.length;
    const percent = Math.round((correct / total) * 100);
    return { correct, total, percent, domainScores };
  }

  function saveAttempt(score) {
    const attempt = {
      id: 'attempt_' + Date.now(),
      date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: state.mode,
      domain: state.domain === 'all' ? 'All Modules' : DOMAINS[state.domain].short,
      score: score,
      correct: score.correct,
      total: score.total,
      percent: score.percent,
      questions: state.questions.map(q => ({
        id: q.id,
        number: q.number,
        domain: q.domain,
        question: q.question,
        table: q.table || null,
        image: q.image || null,
        choices: q.choices,
        correct: q.correct,
        explanation: q.explanation || ''
      })),
      answers: [...state.answers],
      confidences: [...state.confidences],
      mistakes: [...state.mistakes],
      flagged: Array.from(state.flagged)
    };
    
    // Add to seen questions and update global qstats
    state.questions.forEach((q, i) => {
      state.seenQuestions.add(q.id);
      
      const isCorrect = state.answers[i] === q.correct;
      const conf = state.confidences[i];
      const mistake = state.mistakes[i];
      
      if (!state.qstats[q.id]) {
        state.qstats[q.id] = { correct: 0, wrong: 0, mistakeReasons: [] };
      }
      
      const stat = state.qstats[q.id];
      if (isCorrect) {
        stat.correct++;
        if (conf === 'high') {
          stat.streak = (stat.streak || 0) + 1;
        } else {
          stat.streak = 0;
        }
      } else {
        stat.wrong++;
        stat.streak = 0;
      }
      
      if (conf) stat.lastConfidence = conf;
      if (mistake) {
        if (!stat.mistakeReasons) stat.mistakeReasons = [];
        stat.mistakeReasons.push(mistake);
      }
    });

    state.history.push(attempt);
    saveHistory();
  }

  // ── Results ──
  function showResults(score) {
    state.currentScore = score;
    showScreen('results');
    const pass = score.percent >= 70;

    const circle = $('score-circle');
    circle.className = `score-circle ${pass ? 'pass' : 'fail'}`;
    $('score-percent').textContent = score.percent + '%';

    const status = $('result-status');
    status.textContent = pass ? 'PASSED' : 'NOT YET';
    status.className = `result-status ${pass ? 'pass' : 'fail'}`;

    $('result-summary').textContent = `${score.correct} of ${score.total} correct (need 70% to pass)`;

    // Domain bars
    const bars = $('domain-bars');
    bars.innerHTML = '';
    for (const [key, val] of Object.entries(DOMAINS)) {
      const ds = score.domainScores && score.domainScores[key];
      if (!ds || ds.total === 0) continue;
      const pct = Math.round((ds.correct / ds.total) * 100);
      const dp = pct >= 70;
      bars.innerHTML += `
        <div class="domain-bar-item">
          <div class="domain-bar-label">
            <span class="domain-bar-name">${val.name}</span>
            <span class="domain-bar-score ${dp ? 'pass' : 'fail'}">${ds.correct}/${ds.total} (${pct}%)</span>
          </div>
          <div class="domain-bar-track">
            <div class="domain-bar-fill ${dp ? 'pass' : 'fail'}" style="width:${pct}%"></div>
          </div>
        </div>`;
    }

    renderDiagnosticCard(score);
  }

  // ── Diagnostic Assessment ──
  function renderDiagnosticCard(score) {
    const content = $('diagnostic-content');
    if (!content) return;

    const domainsActive = [];
    for (const [key, val] of Object.entries(DOMAINS)) {
      const ds = score.domainScores && score.domainScores[key];
      if (!ds || ds.total === 0) continue;
      const pct = Math.round((ds.correct / ds.total) * 100);
      domainsActive.push({ key, name: val.name, short: val.short, correct: ds.correct, total: ds.total, pct });
    }

    if (domainsActive.length === 0) {
      content.innerHTML = '<p>No domain metrics available.</p>';
      return;
    }

    domainsActive.sort((a, b) => b.pct - a.pct);
    const strongest = domainsActive[0];
    const weakest = domainsActive[domainsActive.length - 1];
    const missedTotal = score.total - score.correct;

    let badgeHtml = '<div class="diagnostic-badge-row">';
    domainsActive.forEach(d => {
      let statusClass = 'neutral';
      let statusIcon = '➖';
      if (d.pct >= 75) { statusClass = 'strong'; statusIcon = '✅'; }
      else if (d.pct < 70) { statusClass = 'weak'; statusIcon = '⚠️'; }
      badgeHtml += `<span class="diag-badge ${statusClass}">${statusIcon} ${d.short}: ${d.correct}/${d.total} (${d.pct}%)</span>`;
    });
    badgeHtml += '</div>';

    let summaryText = '';
    if (score.percent >= 70) {
      summaryText = `Great job! You achieved a passing score of <strong>${score.percent}%</strong>. Your strongest area is <strong>${strongest.name}</strong> (${strongest.pct}%). `;
      if (weakest.pct < 70) {
        summaryText += `However, focus some targeted revision on <strong>${weakest.name}</strong> (${weakest.pct}%) to solidify your exam readiness.`;
      } else {
        summaryText += `All evaluated domains meet or exceed the 70% passing threshold!`;
      }
    } else {
      summaryText = `You scored <strong>${score.percent}%</strong> (missed ${missedTotal} of ${score.total} questions). Your most critical area for improvement is <strong>${weakest.name}</strong> (${weakest.pct}%). Review the detailed explanations below to master the core concepts.`;
    }

    content.innerHTML = `
      <p>${summaryText}</p>
      ${badgeHtml}
    `;
  }

  // ── Toast notification ──
  function showToast(message) {
    const toast = $('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // ── Build Export Data ──
  function getAssessmentExportData() {
    const score = state.currentScore || calculateScore();
    const dateStr = new Date().toISOString();
    const localDateStr = new Date().toLocaleString();

    const domainMetrics = {};
    for (const [key, val] of Object.entries(DOMAINS)) {
      const ds = score.domainScores[key];
      if (ds.total === 0) continue;
      const pct = Math.round((ds.correct / ds.total) * 100);
      domainMetrics[key] = {
        name: val.name,
        short: val.short,
        correct: ds.correct,
        total: ds.total,
        percentage: pct,
        status: pct >= 75 ? 'Mastered' : pct >= 70 ? 'Proficient' : 'Needs Review'
      };
    }

    const questionDetails = state.questions.map((q, i) => {
      const userAns = state.answers[i];
      const isCorrect = userAns === q.correct;
      const conf = state.confidences[i];
      let confLabel = 'Not Set';
      if (conf === 'high') confLabel = 'High 🟢 (Confident)';
      else if (conf === 'medium') confLabel = 'Medium 🟡 (Somewhat Confident)';
      else if (conf === 'low') confLabel = 'Low 🔴 (Guess / Unsure)';
      else if (conf) confLabel = String(conf);

      return {
        id: q.id,
        number: q.number || String(i + 1),
        domain: q.domain,
        domainName: DOMAINS[q.domain] ? DOMAINS[q.domain].name : q.domain,
        question: q.question,
        table: q.table || null,
        choices: q.choices,
        userAnswerIndex: userAns,
        userAnswerText: userAns !== null ? q.choices[userAns] : null,
        correctAnswerIndex: q.correct,
        correctAnswerText: q.choices[q.correct],
        isCorrect: isCorrect,
        confidence: conf,
        confidenceLabel: confLabel,
        isFlagged: state.flagged.has(i),
        explanation: q.explanation || ''
      };
    });

    const correctQuestions = questionDetails.filter(q => q.isCorrect);
    const missedQuestions = questionDetails.filter(q => !q.isCorrect);

    // Confidence distribution
    const confStats = {
      high: { total: 0, correct: 0, missed: 0 },
      medium: { total: 0, correct: 0, missed: 0 },
      low: { total: 0, correct: 0, missed: 0 },
      unrated: { total: 0, correct: 0, missed: 0 }
    };

    questionDetails.forEach(q => {
      const c = (q.confidence === 'high' || q.confidence === 'medium' || q.confidence === 'low') ? q.confidence : 'unrated';
      confStats[c].total++;
      if (q.isCorrect) confStats[c].correct++;
      else confStats[c].missed++;
    });

    // Formatted AI Prompt for LLM Assessment & Study Report
    const aiPrompt = [
      `# AZ-104 Exam Simulation Assessment Report`,
      `**Exam:** Microsoft Azure Administrator (AZ-104)`,
      `**Overall Score:** ${score.correct} / ${score.total} (${score.percent}%) · Status: ${score.percent >= 70 ? 'PASSED' : 'FAILED'}`,
      `**Date:** ${localDateStr}`,
      ``,
      `## 📊 Domain Mastery Breakdown:`,
      ...Object.values(domainMetrics).map(d => `- **${d.name}**: ${d.correct}/${d.total} (${d.percentage}%) [${d.status}]`),
      ``,
      `## 🎯 Confidence vs. Accuracy Calibration:`,
      `- **High Confidence (🟢):** ${confStats.high.total} questions (${confStats.high.correct} Correct, ${confStats.high.missed} Missed)`,
      `- **Medium Confidence (🟡):** ${confStats.medium.total} questions (${confStats.medium.correct} Correct, ${confStats.medium.missed} Missed)`,
      `- **Low Confidence (🔴):** ${confStats.low.total} questions (${confStats.low.correct} Correct, ${confStats.low.missed} Missed)`,
      confStats.unrated.total > 0 ? `- **Unrated Confidence:** ${confStats.unrated.total} questions (${confStats.unrated.correct} Correct, ${confStats.unrated.missed} Missed)` : '',
      ``,
      `## 💡 Instruction for AI Assessor:`,
      `1. Analyze performance across all domains, highlighting any blind spots where questions were missed despite High Confidence.`,
      `2. Review questions answered correctly with Low or Medium confidence to reinforce concepts that were guessed or uncertain.`,
      `3. Provide targeted study recommendations for the real AZ-104 exam.`,
      ``,
      `---`,
      ``,
      `## ❌ Missed / Incorrect Questions (${missedQuestions.length} Total):`,
      missedQuestions.length === 0 ? `*None! Perfect score on these questions.*` : '',
      ...missedQuestions.map((q, idx) => [
        `### Missed Question ${idx + 1} (${q.domainName})`,
        `**Confidence Level:** ${q.confidenceLabel}`,
        `**Question:** ${q.question}`,
        q.table ? `**Resource Table:**\n\`\`\`json\n${JSON.stringify(q.table, null, 2)}\n\`\`\`` : '',
        `**Choices:**`,
        ...q.choices.map(c => `  - ${c}`),
        `**My Selected Answer:** ${q.userAnswerText || 'Not Answered'} ❌`,
        `**Correct Answer:** ${q.correctAnswerText} ✅`,
        `**Explanation:** ${q.explanation}`,
        `---`
      ].filter(Boolean).join('\n')),
      ``,
      `## ✅ Correctly Answered Questions (${correctQuestions.length} Total):`,
      correctQuestions.length === 0 ? `*No questions were answered correctly.*` : '',
      ...correctQuestions.map((q, idx) => [
        `### Correct Question ${idx + 1} (${q.domainName})`,
        `**Confidence Level:** ${q.confidenceLabel}`,
        `**Question:** ${q.question}`,
        q.table ? `**Resource Table:**\n\`\`\`json\n${JSON.stringify(q.table, null, 2)}\n\`\`\`` : '',
        `**Choices:**`,
        ...q.choices.map(c => `  - ${c}`),
        `**My Selected Answer:** ${q.userAnswerText} ✅`,
        `**Explanation:** ${q.explanation}`,
        `---`
      ].filter(Boolean).join('\n'))
    ].filter(Boolean).join('\n');

    return {
      version: '1.0',
      exportedAt: dateStr,
      localDate: localDateStr,
      assessmentSummary: {
        examTitle: 'Microsoft Azure Administrator (AZ-104)',
        mode: state.mode,
        domainFilter: state.domain,
        totalQuestions: score.total,
        correctCount: score.correct,
        incorrectCount: score.total - score.correct,
        percentage: score.percent,
        passed: score.percent >= 70
      },
      domainBreakdown: domainMetrics,
      aiAssessmentPrompt: aiPrompt,
      questions: questionDetails
    };
  }

  // ── Download Helper ──
  function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href);
    }, 100);
  }

  // ── Export JSON ──
  function exportAssessmentJSON() {
    const data = getAssessmentExportData();
    const safeDate = new Date().toISOString().slice(0, 10);
    const fileName = `AZ104_Assessment_${safeDate}_${data.assessmentSummary.percentage}pct.json`;
    downloadFile(JSON.stringify(data, null, 2), fileName, 'application/json');
    showToast('📥 JSON Assessment downloaded!');
  }

  // ── Export Markdown Report ──
  function exportAssessmentMarkdown() {
    const data = getAssessmentExportData();
    const safeDate = new Date().toISOString().slice(0, 10);
    const fileName = `AZ104_Report_${safeDate}_${data.assessmentSummary.percentage}pct.md`;
    downloadFile(data.aiAssessmentPrompt, fileName, 'text/markdown');
    showToast('📄 Markdown Report downloaded!');
  }

  // ── Copy AI Prompt ──
  function copyAIPromptToClipboard() {
    const data = getAssessmentExportData();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(data.aiAssessmentPrompt).then(() => {
        showToast('📋 AI Study Prompt copied to clipboard!');
      }).catch(() => {
        fallbackCopyText(data.aiAssessmentPrompt);
      });
    } else {
      fallbackCopyText(data.aiAssessmentPrompt);
    }
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('📋 AI Study Prompt copied to clipboard!');
    } catch {
      showToast('❌ Unable to copy automatically');
    }
    document.body.removeChild(textarea);
  }

  // ── Import Assessment JSON ──
  function importAssessmentJSON(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        if (!data || !Array.isArray(data.questions) || data.questions.length === 0) {
          alert('Invalid assessment file: missing questions array.');
          return;
        }

        // Reconstruct questions and answers
        state.questions = data.questions.map(q => ({
          id: q.id,
          number: q.number,
          domain: q.domain,
          question: q.question,
          table: q.table || null,
          image: q.image || null,
          choices: q.choices,
          correct: q.correctAnswerIndex !== undefined ? q.correctAnswerIndex : q.correct,
          explanation: q.explanation || ''
        }));

        state.answers = data.questions.map(q => q.userAnswerIndex !== undefined ? q.userAnswerIndex : null);
        state.flagged = new Set();
        data.questions.forEach((q, i) => {
          if (q.isFlagged) state.flagged.add(i);
        });

        state.mode = data.assessmentSummary ? (data.assessmentSummary.mode || 'exam') : 'exam';
        state.domain = data.assessmentSummary ? (data.assessmentSummary.domainFilter || 'all') : 'all';

        const score = calculateScore();
        showResults(score);
        showToast(`📂 Imported assessment (${score.percent}%) from ${data.localDate || 'file'}!`);
      } catch (err) {
        alert('Error parsing JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  // ── Review ──
  function showReview() {
    showScreen('review');
    const list = $('review-list');
    list.innerHTML = state.questions.map((q, i) => {
      const userAns = state.answers[i];
      const isCorrect = userAns === q.correct;
      const userText = userAns !== null ? q.choices[userAns] : 'Not answered';
      const correctText = q.choices[q.correct];
      const imgHtml = q.image ? `<div class="q-image-container"><img src="${q.image}" alt="Diagram" class="q-image"></div>` : '';
      
      const conf = state.confidences ? state.confidences[i] : null;
      let confBadge = '';
      if (conf === 'high') confBadge = '<span class="conf-badge conf-high">🟢 High Confidence</span>';
      else if (conf === 'medium') confBadge = '<span class="conf-badge conf-med">🟡 Medium Confidence</span>';
      else if (conf === 'low') confBadge = '<span class="conf-badge conf-low">🔴 Low Confidence</span>';
      
      let tableHtml = '';
      if (q.table && Array.isArray(q.table.headers) && Array.isArray(q.table.rows)) {
        tableHtml = '<table class="q-table" style="margin:10px 0;"><thead><tr>';
        q.table.headers.forEach(h => { tableHtml += `<th>${escapeHtml(h)}</th>`; });
        tableHtml += '</tr></thead><tbody>';
        q.table.rows.forEach(r => {
          tableHtml += '<tr>';
          r.forEach(cell => { tableHtml += `<td>${escapeHtml(cell)}</td>`; });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table>';
      }

      return `
        <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
          <p class="review-q-num">Question ${i + 1} · ${DOMAINS[q.domain] ? DOMAINS[q.domain].short : q.domain} ${confBadge}</p>
          <div class="review-q-text">${formatQuestionText(q.question)}</div>
          ${tableHtml}
          ${imgHtml}
          <p class="review-answer ${isCorrect ? 'match' : 'yours'}">
            <span class="label">Your answer: </span><span class="value">${userText}</span>
          </p>
          ${!isCorrect ? `<p class="review-answer correct-ans">
            <span class="label">Correct: </span><span class="value">${correctText}</span>
          </p>` : ''}
          <div class="review-explanation">${formatMarkdown(q.explanation)}</div>
        </div>`;
    }).join('');
  }

  // ── Question Bank Explorer ──
  function renderExplorer() {
    const domainPillsEl = $('explorer-domain-pills');
    if (domainPillsEl && domainPillsEl.children.length === 0) {
      let dHtml = `<button class="domain-pill ${state.explorerDomain === 'all' ? 'selected' : ''}" data-exp-domain="all">All Modules</button>`;
      for (const [key, val] of Object.entries(DOMAINS)) {
        const isSel = state.explorerDomain === key ? 'selected' : '';
        dHtml += `<button class="domain-pill ${isSel}" data-exp-domain="${key}">${val.short}</button>`;
      }
      domainPillsEl.innerHTML = dHtml;
    }

    const searchInput = $('explorer-search');
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

    const matched = QUESTIONS.filter(q => {
      // Domain filter
      if (state.explorerDomain !== 'all' && q.domain !== state.explorerDomain) return false;

      // Status filter
      if (state.explorerStatus !== 'all') {
        const s = state.qstats[q.id];
        const isMastered = s && s.lastConfidence === 'high' && (s.correct || 0) >= (s.wrong || 0) && (s.correct || 0) > 0;
        const isReview = s && ((s.wrong || 0) > (s.correct || 0) || (s.lastConfidence === 'high' && (s.wrong || 0) > 0) || (s.mistakeReasons && s.mistakeReasons.length > 0));
        const isUnseen = !state.seenQuestions.has(q.id) && !s;

        if (state.explorerStatus === 'mastered' && !isMastered) return false;
        if (state.explorerStatus === 'review' && !isReview) return false;
        if (state.explorerStatus === 'unseen' && !isUnseen) return false;
      }

      // Search query
      if (query) {
        const inId = (q.id || '').toLowerCase().includes(query);
        const inQ = (q.question || '').toLowerCase().includes(query);
        const inChoices = (q.choices || []).some(c => c.toLowerCase().includes(query));
        const inExp = (q.explanation || '').toLowerCase().includes(query);
        if (!inId && !inQ && !inChoices && !inExp) return false;
      }

      return true;
    });

    const totalMatches = matched.length;
    const visibleCount = Math.min(state.explorerVisible || 50, totalMatches);
    const resultsEl = $('explorer-results');
    const countEl = $('explorer-count');
    const loadMoreBtn = $('explorer-load-more');

    if (countEl) {
      countEl.textContent = `Showing ${visibleCount} of ${totalMatches} questions`;
    }

    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount < totalMatches ? 'block' : 'none';
    }

    if (!resultsEl) return;

    if (totalMatches === 0) {
      resultsEl.innerHTML = '<p class="no-history">No questions match your filters or search query.</p>';
      return;
    }

    const visibleQuestions = matched.slice(0, visibleCount);

    resultsEl.innerHTML = visibleQuestions.map(q => {
      const s = state.qstats[q.id];
      const isMastered = s && s.lastConfidence === 'high' && (s.correct || 0) >= (s.wrong || 0) && (s.correct || 0) > 0;
      const isReview = s && ((s.wrong || 0) > (s.correct || 0) || (s.lastConfidence === 'high' && (s.wrong || 0) > 0) || (s.mistakeReasons && s.mistakeReasons.length > 0));
      const isUnseen = !state.seenQuestions.has(q.id) && !s;

      let statusBadge = '';
      if (isMastered) statusBadge = '<span class="explorer-status-badge mastered">✅ Mastered</span>';
      else if (isReview) statusBadge = '<span class="explorer-status-badge review">⚠️ Review</span>';
      else if (isUnseen) statusBadge = '<span class="explorer-status-badge unseen">❓ Unseen</span>';
      else if (s) statusBadge = '<span class="explorer-status-badge uncertain">🟡 In Progress</span>';

      const dName = DOMAINS[q.domain] ? DOMAINS[q.domain].short : q.domain;
      const cleanSnippet = (q.question || '').replace(/\s+/g, ' ').substring(0, 95) + '...';

      let tableHtml = '';
      if (q.table && Array.isArray(q.table.headers) && Array.isArray(q.table.rows)) {
        tableHtml = '<div class="q-table-container"><table class="q-table"><thead><tr>';
        q.table.headers.forEach(h => { tableHtml += `<th>${escapeHtml(h)}</th>`; });
        tableHtml += '</tr></thead><tbody>';
        q.table.rows.forEach(r => {
          tableHtml += '<tr>';
          r.forEach(cell => { tableHtml += `<td>${escapeHtml(cell)}</td>`; });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
      }

      const imgHtml = q.image ? `<div class="q-image-container"><img src="${q.image}" alt="Diagram" class="q-image"></div>` : '';

      const choicesHtml = (q.choices || []).map((c, ci) => {
        const isCorrectChoice = ci === q.correct;
        let letter = String.fromCharCode(65 + ci);
        let text = c;
        const match = c.match(/^([A-F])[\.:\)]\s*(.*)$/i);
        if (match) {
          letter = match[1].toUpperCase();
          text = match[2];
        }
        return `<div class="explorer-choice ${isCorrectChoice ? 'correct' : ''}">
          <strong>${letter}.</strong> ${escapeHtml(text)} ${isCorrectChoice ? '✓' : ''}
        </div>`;
      }).join('');

      return `
        <div class="explorer-card" data-qid="${q.id}">
          <div class="explorer-card-header">
            <div class="explorer-card-left">
              <span class="explorer-card-id">${q.id}</span>
              <span class="domain-badge" style="margin-left:0">${dName}</span>
              <span class="explorer-card-preview">${escapeHtml(cleanSnippet)}</span>
            </div>
            <div class="explorer-card-badges">
              ${statusBadge}
              <span class="explorer-toggle-icon">▼</span>
            </div>
          </div>
          <div class="explorer-card-detail">
            <div class="explorer-detail-question">${formatQuestionText(q.question)}</div>
            ${tableHtml}
            ${imgHtml}
            <div class="explorer-detail-choices">
              ${choicesHtml}
            </div>
            <div class="explorer-detail-explanation">
              <strong>Explanation:</strong>
              ${formatMarkdown(q.explanation || '')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ── Event Binding ──
  function bindEvents() {
    // Mode selection
    document.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.mode = card.dataset.mode;

        const countPills = $('count-pills');
        const countTitle = countPills ? countPills.previousElementSibling : null;
        if (state.mode === 'exam' || state.mode === 'weakness') {
          if (countPills) countPills.style.display = 'none';
          if (countTitle && countTitle.classList.contains('section-title')) countTitle.style.display = 'none';
        } else {
          if (countPills) countPills.style.display = 'flex';
          if (countTitle && countTitle.classList.contains('section-title')) countTitle.style.display = 'block';
        }
      });
    });

    // Domain pills (delegated)
    $('domain-pills').addEventListener('click', e => {
      const pill = e.target.closest('.domain-pill');
      if (!pill) return;
      document.querySelectorAll('#domain-pills .domain-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      state.domain = pill.dataset.domain;
      $('stat-total').textContent = getFilteredQuestions().length;
    });

    // Question count pills (delegated)
    const countPills = $('count-pills');
    if (countPills) {
      countPills.addEventListener('click', e => {
        if (e.target.tagName === 'INPUT') return; // ignore clicks on the custom input box itself
        const pill = e.target.closest('.domain-pill');
        if (!pill) return;
        document.querySelectorAll('#count-pills .domain-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        state.questionCount = pill.dataset.count;
      });

      const customInput = $('custom-count');
      if (customInput) {
        customInput.addEventListener('input', e => {
          document.querySelectorAll('#count-pills .domain-pill').forEach(p => p.classList.remove('selected'));
          customInput.classList.add('selected');
          state.questionCount = customInput.value;
        });
      }
    }

    // Start
    $('start-btn').addEventListener('click', startQuiz);

    // Quit (back to menu with confirmation)
    $('quit-btn').addEventListener('click', () => {
      if (!confirm('Are you sure you want to quit? Your progress will be lost.')) return;
      stopTimer();
      showScreen('dashboard');
      renderDashboard();
    });

    // Choices (delegated) — handles answer selection and elimination X
    $('choices').addEventListener('click', e => {
      const elimBtn = e.target.closest('.eliminate-x');
      if (elimBtn) {
        e.stopPropagation();
        const cIndex = parseInt(elimBtn.dataset.elim, 10);
        toggleElimination(cIndex);
        return;
      }
      const btn = e.target.closest('.choice-btn');
      if (!btn || btn.classList.contains('disabled')) return;
      const cIndex = parseInt(btn.dataset.index, 10);
      const elimSet = state.eliminations[state.index];
      if (elimSet && elimSet.has(cIndex)) return; // Prevent selecting eliminated choice
      selectAnswer(cIndex);
    });

    // Right-click to eliminate choice
    $('choices').addEventListener('contextmenu', e => {
      const btn = e.target.closest('.choice-btn') || e.target.closest('.choice-btn-wrapper');
      if (!btn) return;
      e.preventDefault();
      const choiceBtn = btn.querySelector('.choice-btn') || btn;
      const cIndex = parseInt(choiceBtn.dataset.index, 10);
      if (!isNaN(cIndex)) {
        toggleElimination(cIndex);
      }
    });

    // Confidence Tracker (no longer used inline, kept for safety)
    // Confidence is now handled via nav-right buttons

    // Mistake Classification (delegated since innerHTML is dynamic)
    const mistakeContainer = $('mistake-container');
    if (mistakeContainer) {
      mistakeContainer.addEventListener('click', e => {
        const btn = e.target.closest('.mistake-btn');
        if (!btn) return;
        selectMistake(btn.dataset.reason);
      });
    }

    // Nav — delegated since nav-right innerHTML changes dynamically
    $('prev-btn').addEventListener('click', goPrev);
    const navRight = $('nav-right');
    navRight.addEventListener('click', e => {
      const confBtn = e.target.closest('.btn-conf-next');
      if (confBtn) {
        selectConfidenceAndEvaluate(confBtn.dataset.conf);
        return;
      }
      const nextBtn = e.target.closest('#next-btn');
      if (nextBtn) {
        goNext();
      }
    });

    // Flag
    $('flag-btn').addEventListener('click', () => {
      if (state.flagged.has(state.index)) state.flagged.delete(state.index);
      else state.flagged.add(state.index);
      $('flag-btn').className = state.flagged.has(state.index) ? 'btn-flag flagged' : 'btn-flag';
      updateGrid();
    });

    // Submit exam
    $('submit-btn').addEventListener('click', () => {
      const unanswered = state.answers.filter(a => a === null).length;
      if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
      }
      finishQuiz();
    });

    // Question grid (delegated)
    $('question-grid').addEventListener('click', e => {
      const btn = e.target.closest('.q-grid-btn');
      if (!btn) return;
      goToQuestion(parseInt(btn.dataset.qi));
    });

    // Results actions
    $('review-btn').addEventListener('click', showReview);
    $('retry-btn').addEventListener('click', () => {
      showScreen('dashboard');
      renderDashboard();
    });
    $('home-btn').addEventListener('click', () => {
      showScreen('dashboard');
      renderDashboard();
    });

    // Export & AI Prompt listeners
    const exportJsonBtn = $('export-json-btn');
    if (exportJsonBtn) exportJsonBtn.addEventListener('click', exportAssessmentJSON);

    const exportJsonReviewBtn = $('export-json-review-btn');
    if (exportJsonReviewBtn) exportJsonReviewBtn.addEventListener('click', exportAssessmentJSON);

    const exportMdBtn = $('export-md-btn');
    if (exportMdBtn) exportMdBtn.addEventListener('click', exportAssessmentMarkdown);

    const copyPromptBtn = $('copy-prompt-btn');
    if (copyPromptBtn) copyPromptBtn.addEventListener('click', copyAIPromptToClipboard);

    // Import assessment listeners
    const importBtnDash = $('import-btn-dash');
    const importFileInput = $('import-file-input');
    if (importBtnDash && importFileInput) {
      importBtnDash.addEventListener('click', () => {
        importFileInput.value = '';
        importFileInput.click();
      });
      importFileInput.addEventListener('change', e => {
        if (e.target.files && e.target.files[0]) {
          importAssessmentJSON(e.target.files[0]);
        }
      });
    }

    // History item click (review or delete)
    const historyList = $('history-list');
    if (historyList) {
      historyList.addEventListener('click', e => {
        const delBtn = e.target.closest('.history-delete-btn');
        if (delBtn) {
          e.stopPropagation();
          const delId = delBtn.dataset.deleteId;
          if (delId) deleteHistoryAttempt(delId);
          return;
        }
        const item = e.target.closest('.history-item');
        if (!item) return;
        const attemptId = item.dataset.id;
        if (attemptId) {
          loadHistoryAttempt(attemptId);
        }
      });
    }

    // Review back
    $('back-results-btn').addEventListener('click', () => showScreen('results'));

    // Reset seen pool button / card
    const handleResetSeen = (e) => {
      if (e) e.stopPropagation();
      const currentSeen = state.seenQuestions.size;
      const isConfirmed = confirm(
        `⚠️ Reset Questions Seen Pool?\n\n` +
        `You currently have ${currentSeen} question(s) marked as seen.\n\n` +
        `Click "OK" to reset the pool back to 0 so all 430 questions become immediately available in new practice and exam sessions.\n\n` +
        `Click "Cancel" to keep your current progress.`
      );
      if (isConfirmed) {
        resetSeenPool();
      }
    };

    const resetSeenBtn = $('reset-seen-btn');
    if (resetSeenBtn) resetSeenBtn.addEventListener('click', handleResetSeen);

    const statSeenCard = $('stat-seen-card');
    if (statSeenCard) statSeenCard.addEventListener('click', handleResetSeen);

    // Explorer events
    const browseBtn = $('browse-btn');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => {
        showScreen('explorer');
        state.explorerVisible = 50;
        renderExplorer();
      });
    }

    const explorerBackBtn = $('explorer-back-btn');
    if (explorerBackBtn) {
      explorerBackBtn.addEventListener('click', () => {
        showScreen('dashboard');
        renderDashboard();
      });
    }

    const explorerSearch = $('explorer-search');
    if (explorerSearch) {
      explorerSearch.addEventListener('input', () => {
        state.explorerVisible = 50;
        renderExplorer();
      });
    }

    const expDomainPills = $('explorer-domain-pills');
    if (expDomainPills) {
      expDomainPills.addEventListener('click', e => {
        const pill = e.target.closest('.domain-pill');
        if (!pill) return;
        document.querySelectorAll('#explorer-domain-pills .domain-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        state.explorerDomain = pill.dataset.expDomain;
        state.explorerVisible = 50;
        renderExplorer();
      });
    }

    const expStatusPills = $('explorer-status-pills');
    if (expStatusPills) {
      expStatusPills.addEventListener('click', e => {
        const pill = e.target.closest('.domain-pill');
        if (!pill) return;
        document.querySelectorAll('#explorer-status-pills .domain-pill').forEach(p => p.classList.remove('selected'));
        pill.classList.add('selected');
        state.explorerStatus = pill.dataset.status;
        state.explorerVisible = 50;
        renderExplorer();
      });
    }

    const expLoadMore = $('explorer-load-more');
    if (expLoadMore) {
      expLoadMore.addEventListener('click', () => {
        state.explorerVisible = (state.explorerVisible || 50) + 50;
        renderExplorer();
      });
    }

    const expResults = $('explorer-results');
    if (expResults) {
      expResults.addEventListener('click', e => {
        const card = e.target.closest('.explorer-card');
        if (!card) return;
        card.classList.toggle('expanded');
        const icon = card.querySelector('.explorer-toggle-icon');
        if (icon) icon.textContent = card.classList.contains('expanded') ? '▲' : '▼';
      });
    }
  }

  // ── Go ──
  window.formatQuestionText = formatQuestionText;
  document.addEventListener('DOMContentLoaded', init);
})();
