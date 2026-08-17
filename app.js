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

    renderHistory();
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
      const modeLabel = h.mode === 'exam' ? '⏱️ Exam' : (h.mode === 'notes' ? '📚 Notes' : '📝 Practice');
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
    $('q-text').textContent = q.question;

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
    const isPractice = state.mode === 'practice' || state.mode === 'notes';
    const isExam = state.mode === 'exam';
    const hasAnswer = state.answers[state.index] !== null;
    const hasConf = state.confidences[state.index] !== null;
    const evaluated = isExam ? hasAnswer : (hasAnswer && hasConf);

    choicesEl.classList.remove('hidden');

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
      const match = c.match(/^([A-F])[\.\:\)]\s*(.*)$/i);
      if (match) {
        letter = match[1].toUpperCase();
        text = match[2];
      }

      return `
        <button class="${cls}" data-index="${i}">
          <span class="choice-letter">${letter}</span>
          <span class="choice-text">${escapeHtml(text)}</span>
        </button>
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
    const isPractice = state.mode === 'practice' || state.mode === 'notes';
    const evaluated = isPractice ? (state.answers[state.index] !== null && state.confidences[state.index] !== null) : false;
    if (evaluated) return;

    state.answers[state.index] = choiceIndex;
    state.showMistakePrompt = false;
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
    const isPractice = state.mode === 'practice' || state.mode === 'notes';
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
      if (isCorrect) stat.correct++;
      else stat.wrong++;
      
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
        isFlagged: state.flagged.has(i),
        explanation: q.explanation || ''
      };
    });

    const missedQuestions = questionDetails.filter(q => !q.isCorrect);

    // Formatted AI Prompt for LLM Assessment
    const aiPrompt = [
      `# AZ-104 Exam Simulation Assessment Report`,
      `**Exam:** Microsoft Azure Administrator (AZ-104)`,
      `**Overall Score:** ${score.correct} / ${score.total} (${score.percent}%) · Status: ${score.percent >= 70 ? 'PASSED' : 'FAILED'}`,
      `**Date:** ${localDateStr}`,
      ``,
      `## Domain Mastery Breakdown:`,
      ...Object.values(domainMetrics).map(d => `- **${d.name}**: ${d.correct}/${d.total} (${d.percentage}%) [${d.status}]`),
      ``,
      `## Instruction for AI Assessor:`,
      `1. Analyze my performance across the domains above and identify my top conceptual weaknesses based on the questions I answered incorrectly.`,
      `2. For each missed question listed below, clearly explain why my chosen answer was incorrect, the exact Azure architecture rule/principle involved, and a high-yield memory tip for the real exam.`,
      `3. Recommend a targeted study plan focused on my weakest areas.`,
      ``,
      `## Detailed Missed Questions (${missedQuestions.length} Total):`,
      ...missedQuestions.map((q, idx) => [
        `### Missed Question ${idx + 1} (${q.domainName})`,
        `**Question:** ${q.question}`,
        q.table ? `**Resource Table:**\n\`\`\`json\n${JSON.stringify(q.table, null, 2)}\n\`\`\`` : '',
        `**Choices:**`,
        ...q.choices.map(c => `  - ${c}`),
        `**My Selected Answer:** ${q.userAnswerText || 'Not Answered'} ❌`,
        `**Correct Answer:** ${q.correctAnswerText} ✅`,
        `**Explanation:** ${q.explanation}`,
        `---`
      ].filter(Boolean).join('\n'))
    ].join('\n');

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
          <p class="review-q-num">Question ${i + 1} · ${DOMAINS[q.domain] ? DOMAINS[q.domain].short : q.domain}</p>
          <p class="review-q-text">${q.question}</p>
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

  // ── Event Binding ──
  function bindEvents() {
    // Mode selection
    document.querySelectorAll('.mode-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state.mode = card.dataset.mode;
      });
    });

    // Source pills (delegated)

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

    // Choices (delegated)
    $('choices').addEventListener('click', e => {
      const btn = e.target.closest('.choice-btn');
      if (!btn || btn.classList.contains('disabled')) return;
      selectAnswer(parseInt(btn.dataset.index));
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
  }

  // ── Go ──
  document.addEventListener('DOMContentLoaded', init);
})();
