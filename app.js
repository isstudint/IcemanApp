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
    history: []
  };

  // ── DOM shorthand ──
  const $ = id => document.getElementById(id);

  // ── Init ──
  function init() {
    loadHistory();
    renderDashboard();
    bindEvents();
  }

  // ── History (LocalStorage) ──
  function loadHistory() {
    try { state.history = JSON.parse(localStorage.getItem('az104_history') || '[]'); } catch { state.history = []; }
  }
  function saveHistory() {
    localStorage.setItem('az104_history', JSON.stringify(state.history.slice(-20))); // ponytail: keep last 20
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
    const filtered = getFilteredQuestions();
    $('stat-total').textContent = filtered.length;

    // Last score
    if (state.history.length > 0) {
      const last = state.history[state.history.length - 1];
      $('stat-last').textContent = last.percent + '%';
    }

    renderHistory();
  }

  function renderHistory() {
    const list = $('history-list');
    if (state.history.length === 0) {
      list.innerHTML = '<p class="no-history">No attempts yet. Start your first quiz!</p>';
      return;
    }
    list.innerHTML = state.history.slice().reverse().slice(0, 10).map(h => {
      const pass = h.percent >= 70;
      return `<div class="history-item">
        <div>
          <span class="history-score ${pass ? 'pass' : 'fail'}">${h.percent}%</span>
          <span class="history-meta"> · ${h.correct}/${h.total} · ${h.mode}</span>
        </div>
        <span class="history-meta">${h.date}</span>
      </div>`;
    }).join('');
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

    // ponytail: shuffle for variety
    filtered = shuffle(filtered);
    
    // Apply count setting
    if (state.mode === 'practice' || state.mode === 'notes') {
      if (state.questionCount !== 'all') {
        const limit = parseInt(state.questionCount, 10);
        if (!isNaN(limit) && limit > 0) {
          filtered = filtered.slice(0, limit);
        }
      }
    } else if (state.mode === 'exam') {
      // Exam mode is 50 max (simulating the real exam)
      filtered = filtered.slice(0, 50);
    }

    state.questions = filtered;
    state.index = 0;
    state.answers = new Array(state.questions.length).fill(null);
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

    const choicesEl = $('choices');
    const answered = state.answers[state.index] !== null;
    const isPractice = state.mode === 'practice' || state.mode === 'notes';

    choicesEl.classList.remove('hidden');
    
    // Always hide flashcard elements (we will remove them from HTML later)

    choicesEl.innerHTML = q.choices.map((c, i) => {
      let cls = 'choice-btn';
      if (answered && state.answers[state.index] === i) cls += ' selected';
      if (isPractice && answered) {
        cls += ' disabled';
        if (i === q.correct) cls += ' correct';
        else if (state.answers[state.index] === i && i !== q.correct) cls += ' wrong';
      }
      if (!isPractice && state.answers[state.index] === i) cls += ' selected';
      return `<button class="${cls}" data-index="${i}">${c}</button>`;
    }).join('');

    // Feedback
    const fb = $('feedback');
    if (isPractice && answered) {
      const isCorrect = state.answers[state.index] === q.correct;
      fb.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
      
      // Handle missing explanations or display them
      const explanationText = q.explanation ? q.explanation : (isCorrect ? 'Good job!' : 'Incorrect.');
      fb.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong><br/>${explanationText}`;
    } else {
      fb.className = 'feedback hidden';
    }

    // Nav buttons
    $('prev-btn').disabled = state.index === 0;
    $('next-btn').textContent = state.index === state.questions.length - 1 ? 'Finish' : 'Next →';

    // Flag button
    $('flag-btn').className = state.flagged.has(state.index) ? 'btn-flag flagged' : 'btn-flag';

    updateGrid();
  }

  // ── Select Answer ──
  function selectAnswer(choiceIndex) {
    const q = state.questions[state.index];
    const alreadyAnswered = state.answers[state.index] !== null;

    // In practice mode, lock after first answer
    if (state.mode === 'practice' && alreadyAnswered) return;

    state.answers[state.index] = choiceIndex;
    renderQuestion();
  }

  // ── Navigation ──
  function goNext() {
    if (state.index < state.questions.length - 1) {
      state.index++;
      renderQuestion();
    } else if (state.mode === 'practice') {
      finishQuiz();
    }
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
    state.history.push({
      date: new Date().toLocaleDateString(),
      mode: state.mode,
      domain: state.domain === 'all' ? 'All' : DOMAINS[state.domain].short,
      correct: score.correct,
      total: score.total,
      percent: score.percent
    });
    saveHistory();
  }

  // ── Results ──
  function showResults(score) {
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
      const ds = score.domainScores[key];
      if (ds.total === 0) continue;
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
      return `
        <div class="review-item ${isCorrect ? 'correct' : 'wrong'}">
          <p class="review-q-num">Question ${i + 1} · ${DOMAINS[q.domain].short}</p>
          <p class="review-q-text">${q.question}</p>
          ${imgHtml}
          <p class="review-answer ${isCorrect ? 'match' : 'yours'}">
            <span class="label">Your answer: </span><span class="value">${userText}</span>
          </p>
          ${!isCorrect ? `<p class="review-answer correct-ans">
            <span class="label">Correct: </span><span class="value">${correctText}</span>
          </p>` : ''}
          <p class="review-explanation">${q.explanation}</p>
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

    // Reveal Flashcard Answer

    // Nav
    $('prev-btn').addEventListener('click', goPrev);
    $('next-btn').addEventListener('click', goNext);

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

    // Review back
    $('back-results-btn').addEventListener('click', () => showScreen('results'));
  }

  // ── Go ──
  document.addEventListener('DOMContentLoaded', init);
})();
