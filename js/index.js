
// PAGE NAVIGATION
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav ul a').forEach(a => a.classList.remove('active'));
    const pg = document.getElementById('page-' + id);
    if (pg) { pg.classList.add('active'); }
    const na = document.getElementById('nav-' + id);
    if (na) { na.classList.add('active'); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('navMenu').classList.remove('open');
}

// MOBILE MENU
document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navMenu').classList.toggle('open');
});

// SCROLL TOP
window.addEventListener('scroll', function () {
    const btn = document.getElementById('scrollTop');
    if (window.scrollY > 400) btn.classList.add('visible');
    else btn.classList.remove('visible');
});

// CONTACT FORM
function sendMsg() {
    const name = document.getElementById('fname').value.trim();
    const email = document.getElementById('femail').value.trim();
    const subject = document.getElementById('fsubject').value.trim();
    const msg = document.getElementById('fmsg').value.trim();
    if (!name || !email || !subject || !msg) { showToast('⚠️ Please fill in all fields.'); return; }
    showToast('✅ Message sent! We\'ll get back to you soon.');
    ['fname', 'femail', 'fsubject', 'fmsg'].forEach(id => document.getElementById(id).value = '');
}
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
}

// TIPS ACCORDION
function toggleTip(header) {
    const body = header.nextElementSibling;
    const arrow = header.querySelector('.tip-arrow');
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.tip-body').forEach(b => { b.classList.remove('open'); b.previousElementSibling.querySelector('.tip-arrow').style.transform = ''; });
    if (!isOpen) { body.classList.add('open'); arrow.style.transform = 'rotate(180deg)'; }
}

// GALLERY
function openLightboxLocal(el) { /* placeholder — can expand later */ }

// QUIZ ENGINE
const quizzes = {
    math: [
        { q: 'What is 12 × 12?', opts: ['144', '124', '132', '148'], ans: 0 },
        { q: 'Solve: 3x + 6 = 21', opts: ['x = 3', 'x = 5', 'x = 7', 'x = 9'], ans: 1 },
        { q: 'What is 25% of 200?', opts: ['40', '50', '55', '60'], ans: 1 },
        { q: 'What is √144?', opts: ['11', '12', '13', '14'], ans: 1 },
        { q: 'If a triangle has sides 3, 4, and 5, what is its area?', opts: ['6', '7.5', '10', '12'], ans: 0 },
    ],
    science: [
        { q: 'What planet is closest to the Sun?', opts: ['Venus', 'Mars', 'Mercury', 'Earth'], ans: 2 },
        { q: 'What gas do plants absorb during photosynthesis?', opts: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], ans: 2 },
        { q: 'What is the chemical symbol for water?', opts: ['WO', 'H2O', 'HO2', 'W2H'], ans: 1 },
        { q: 'How many bones are in the adult human body?', opts: ['186', '196', '206', '216'], ans: 2 },
        { q: 'What force keeps planets in orbit around the Sun?', opts: ['Magnetism', 'Friction', 'Gravity', 'Nuclear Force'], ans: 2 },
    ],
    english: [
        { q: 'Which word is a synonym for "happy"?', opts: ['Sad', 'Joyful', 'Tired', 'Angry'], ans: 1 },
        { q: 'What is the past tense of "run"?', opts: ['Runned', 'Running', 'Ran', 'Runs'], ans: 2 },
        { q: 'Identify the noun: "The cat sat on the mat."', opts: ['sat', 'on', 'cat', 'the'], ans: 2 },
        { q: 'Which sentence uses correct punctuation?', opts: ["Its a nice day.", "It's a nice day.", "Its' a nice day.", "It is, a nice day."], ans: 1 },
        { q: 'What is a metaphor?', opts: ['A direct comparison using like or as', 'An indirect comparison without like or as', 'A type of rhyme', 'A question asked for effect'], ans: 1 },
    ],
    history: [
        { q: 'In what year did Egypt sign the Camp David Accords?', opts: ['1975', '1978', '1980', '1982'], ans: 1 },
        { q: 'Who built the Great Pyramid of Giza?', opts: ['Ramesses II', 'Tutankhamun', 'Khufu', 'Cleopatra'], ans: 2 },
        { q: 'What ancient river civilization developed in Egypt?', opts: ['Mesopotamian', 'Indus Valley', 'Nile Valley', 'Yellow River'], ans: 2 },
        { q: 'In which century did the Islamic conquest of Egypt occur?', opts: ['5th century', '7th century', '9th century', '11th century'], ans: 1 },
        { q: 'Who was Egypt\'s first president after the 1952 revolution?', opts: ['Anwar Sadat', 'Hosni Mubarak', 'Mohamed Naguib', 'Gamal Abdel Nasser'], ans: 2 },
    ]
};

let currentQuiz = [], currentQ = 0, score = 0, answered = false, activeSubject = 'math';

function loadQuiz(subject) {
    activeSubject = subject;
    document.querySelectorAll('[id^="qbtn-"]').forEach(b => { b.style.background = '#1a3a6b'; b.style.color = 'white'; });
    document.getElementById('qbtn-' + subject).style.background = '#f0a500';
    document.getElementById('qbtn-' + subject).style.color = '#1a3a6b';
    currentQuiz = quizzes[subject]; currentQ = 0; score = 0; answered = false;
    document.getElementById('quiz-area').style.display = 'block';
    document.getElementById('quiz-score').style.display = 'none';
    renderQ();
}

function renderQ() {
    const q = currentQuiz[currentQ];
    const progress = document.getElementById('quiz-progress');
    progress.innerHTML = currentQuiz.map((_, i) => `<div class="quiz-dot ${i < currentQ ? 'done' : i === currentQ ? 'current' : ''}"></div>`).join('');
    document.getElementById('quiz-question').textContent = (currentQ + 1) + '. ' + q.q;
    document.getElementById('quiz-options').innerHTML = q.opts.map((o, i) => `<button class="quiz-opt" onclick="selectOpt(this,${i},${q.ans})">${o}</button>`).join('');
    const res = document.getElementById('quiz-result');
    res.style.display = 'none'; res.textContent = '';
    answered = false;
}

function selectOpt(btn, selected, correct) {
    if (answered) return;
    answered = true;
    const opts = document.querySelectorAll('.quiz-opt');
    opts[correct].classList.add('correct');
    if (selected !== correct) { btn.classList.add('wrong'); }
    else { score++; }
    const res = document.getElementById('quiz-result');
    res.style.display = 'block';
    res.style.background = selected === correct ? '#dcfce7' : '#fee2e2';
    res.style.color = selected === correct ? '#166534' : '#7f1d1d';
    res.textContent = selected === correct ? '✅ Correct!' : '❌ The correct answer is: ' + currentQuiz[currentQ].opts[correct];
    setTimeout(() => {
        currentQ++;
        if (currentQ < currentQuiz.length) { renderQ(); }
        else { showScore(); }
    }, 1600);
}

function showScore() {
    document.getElementById('quiz-area').style.display = 'none';
    const sc = document.getElementById('quiz-score');
    sc.style.display = 'block';
    document.getElementById('score-val').textContent = score + '/' + currentQuiz.length;
    const pct = score / currentQuiz.length;
    document.getElementById('score-msg').textContent = pct === 1 ? 'Perfect score! Outstanding! 🎉' : pct >= 0.8 ? 'Excellent work! 🌟' : pct >= 0.6 ? 'Good job! Keep practising. 👍' : 'Keep studying — you\'ll get there! 💪';
}

function restartQuiz() { loadQuiz(activeSubject); }

// Init default quiz
loadQuiz('math');

// Stat counter animation
const statNums = document.querySelectorAll('.stat .num');
const observed = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.style.transition = 'opacity .6s'; entry.target.style.opacity = '1'; }
    });
});
statNums.forEach(el => { el.style.opacity = '0'; observed.observe(el); });