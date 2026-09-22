/* =========================================================================
   QUIZ — Present Perfect Simple & Continuous
   10 preguntas. Al seleccionar una opción se revela de inmediato si es
   correcta (verde) o incorrecta (roja), junto con una explicación ("el
   porqué"). Al finalizar se muestra el puntaje total.
   ========================================================================= */

const QUIZ_QUESTIONS = [
  {
    question: "Choose the correct form: \"She ______ to Peru three times.\"",
    options: [
      "has been going",
      "has gone",
      "have gone",
      "is going"
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'has gone' (Present Perfect Simple). Hablamos de una " +
      "experiencia contada como número de veces ('three times'), por lo " +
      "que se usa la forma simple, no la continua. Además, 'she' requiere " +
      "el auxiliar 'has', no 'have'."
  },
  {
    question: "\"How long ______ you ______ English?\" (emphasis on duration)",
    options: [
      "have / studied",
      "have / been studying",
      "has / studying",
      "did / study"
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'have been studying'. La pregunta 'How long' pide la " +
      "duración de una actividad que sigue relevante, por lo que se usa " +
      "Present Perfect Continuous: have/has + been + verbo-ing."
  },
  {
    question: "Which sentence uses a stative verb correctly?",
    options: [
      "I have been knowing her since school.",
      "I have known her since school.",
      "I have been known her since school.",
      "I known her since school."
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'I have known her since school'. 'Know' es un verbo de " +
      "estado (stative verb) y no admite la forma continua; siempre se " +
      "usa Present Perfect Simple con este tipo de verbos."
  },
  {
    question: "\"Look! Your shirt is covered in paint. What ______?\"",
    options: [
      "have you done",
      "have you been doing",
      "did you do",
      "do you do"
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'have you been doing'. Hay evidencia visible en el " +
      "presente (la camisa manchada) de una actividad reciente; el " +
      "Present Perfect Continuous se usa precisamente para este tipo de " +
      "situación."
  },
  {
    question: "Complete: \"I ______ my keys. I can't open the door.\"",
    options: [
      "have lost",
      "have been losing",
      "am losing",
      "lost"
    ],
    correctIndex: 0,
    explanation:
      "Correcto: 'have lost'. La acción pasada tiene un resultado claro y " +
      "terminado en el presente (no puede abrir la puerta), lo cual es el " +
      "uso típico del Present Perfect Simple, no del continuo."
  },
  {
    question: "Which word is normally used with Present Perfect Simple, not Continuous?",
    options: [
      "lately",
      "already",
      "all morning",
      "how long"
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'already' (ya) es un marcador clásico del Present " +
      "Perfect Simple. Las otras tres opciones ('lately', 'all morning', " +
      "'how long') se asocian normalmente con la forma continua porque " +
      "enfatizan duración o un periodo reciente."
  },
  {
    question: "\"They ______ football since they were children.\" (they still play)",
    options: [
      "have played",
      "have been playing",
      "played",
      "are playing"
    ],
    correctIndex: 1,
    explanation:
      "Correcto: 'have been playing'. La actividad comenzó en el pasado y " +
      "continúa hasta ahora, con énfasis en la duración; ese es el uso " +
      "central del Present Perfect Continuous."
  },
  {
    question: "Choose the correct question form.",
    options: [
      "Has she ever traveled abroad?",
      "She has ever traveled abroad?",
      "Has she ever been traveled abroad?",
      "Does she has ever traveled abroad?"
    ],
    correctIndex: 0,
    explanation:
      "Correcto: 'Has she ever traveled abroad?'. En preguntas, el " +
      "auxiliar 'has/have' se invierte con el sujeto, y 'ever' se coloca " +
      "entre el sujeto y el participio pasado."
  },
  {
    question: "\"We ______ dinner. Would you like to join us?\" (recently finished, food still on the table)",
    options: [
      "have just cooked",
      "have been cooking since two hours",
      "cooked",
      "are cooking"
    ],
    correctIndex: 0,
    explanation:
      "Correcto: 'have just cooked'. 'Just' indica que la acción terminó " +
      "hace muy poco tiempo y su resultado (la cena lista) es relevante " +
      "ahora; se usa Present Perfect Simple."
  },
  {
    question: "Which sentence is grammatically INCORRECT?",
    options: [
      "I have been living here for two years.",
      "I have been loving this city for two years.",
      "I have lived here for two years.",
      "How long have you lived here?"
    ],
    correctIndex: 1,
    explanation:
      "Incorrecta: 'I have been loving this city'. 'Love' es un verbo de " +
      "estado y no se usa en la forma continua; la versión correcta " +
      "sería 'I have loved this city for two years'."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

const questionIndexEl = document.getElementById("quiz-question-index");
const questionTextEl = document.getElementById("quiz-question-text");
const optionsContainerEl = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");
const nextBtn = document.getElementById("quiz-next-btn");
const progressFillEl = document.getElementById("quiz-progress-fill");
const scoreLabelEl = document.getElementById("quiz-score-label");
const quizCardEl = document.getElementById("quiz-card");
const resultEl = document.getElementById("quiz-result");
const resultScoreEl = document.getElementById("quiz-result-score");
const resultMessageEl = document.getElementById("quiz-result-message");
const restartBtn = document.getElementById("quiz-restart-btn");

const OPTION_LETTERS = ["A", "B", "C", "D"];

function renderQuestion() {
  answered = false;
  feedbackEl.className = "quiz-feedback";
  feedbackEl.innerHTML = "";
  nextBtn.disabled = true;

  const total = QUIZ_QUESTIONS.length;
  const q = QUIZ_QUESTIONS[currentQuestionIndex];

  questionIndexEl.textContent = "Pregunta " + (currentQuestionIndex + 1) + " de " + total;
  questionTextEl.textContent = q.question;

  optionsContainerEl.innerHTML = "";
  q.options.forEach((optionText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.setAttribute("data-index", idx);
    btn.innerHTML =
      '<span class="option-letter">' + OPTION_LETTERS[idx] + "</span>" +
      "<span>" + optionText + "</span>";
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    optionsContainerEl.appendChild(btn);
  });

  progressFillEl.style.width = (currentQuestionIndex / total) * 100 + "%";
  scoreLabelEl.textContent = "Puntaje: " + score + " / " + total;

  nextBtn.textContent =
    currentQuestionIndex === total - 1 ? "Ver resultado" : "Siguiente pregunta";
}

function handleAnswer(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;

  const q = QUIZ_QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  // Deshabilita todas las opciones y marca visualmente correcta/incorrecta
  const allButtons = optionsContainerEl.querySelectorAll(".quiz-option");
  allButtons.forEach((btn) => {
    btn.disabled = true;
    const idx = parseInt(btn.getAttribute("data-index"), 10);
    if (idx === q.correctIndex) {
      btn.classList.add("is-correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("is-incorrect");
    }
  });

  if (isCorrect) {
    score += 1;
  }

  feedbackEl.classList.add("visible", isCorrect ? "correct" : "incorrect");
  feedbackEl.innerHTML =
    '<span class="quiz-feedback-title">' +
    (isCorrect ? "¡Correcto!" : "No es correcto.") +
    "</span>" +
    q.explanation;

  scoreLabelEl.textContent = "Puntaje: " + score + " / " + QUIZ_QUESTIONS.length;
  nextBtn.disabled = false;
}

function goToNext() {
  const total = QUIZ_QUESTIONS.length;
  if (currentQuestionIndex < total - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progressFillEl.style.width = "100%";
  quizCardEl.style.display = "none";
  document.querySelector(".quiz-nav").style.display = "none";

  const total = QUIZ_QUESTIONS.length;
  resultScoreEl.textContent = score + " / " + total;

  let message = "";
  if (score === total) {
    message = "Excelente. Dominas la diferencia entre Simple y Continuo.";
  } else if (score >= total * 0.7) {
    message = "Muy bien. Repasa los usos que fallaste y estarás listo/a.";
  } else if (score >= total * 0.4) {
    message = "Vas por buen camino. Vuelve a revisar las lecciones 1 y 2 antes del parcial.";
  } else {
    message = "Repasa las lecciones de Simple y Continuo antes de intentarlo de nuevo.";
  }
  resultMessageEl.textContent = message;

  resultEl.classList.add("visible");
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.remove("visible");
  quizCardEl.style.display = "";
  document.querySelector(".quiz-nav").style.display = "";
  renderQuestion();
}

nextBtn.addEventListener("click", goToNext);
restartBtn.addEventListener("click", restartQuiz);

renderQuestion();
