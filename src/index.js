import "./main.scss";
import questions from "./data/questions.json";

let testStarted = false;
let testEnded = false;
let currentQuestionIndex = 0;
let successAnswers = 0;
let darkTheme = false;

const startTest = () => {
  successAnswers = 0;
  currentQuestionIndex = 0;
  testStarted = true;
  testEnded = false;
  render();
};

const deleteHandlers = () => {
  if (testStarted && document.querySelector(".start-button")) {
    document.querySelector(".start-button").removeEventListener("click", startTest);
  }
  if (!testEnded && document.querySelector(".button-start-again")) {
    const buttonStartAgain = document.querySelector(".button-start-again");
    buttonStartAgain.removeEventListener("click", startTest);
  }
  const answers = document.querySelectorAll(".question-answers__item");
  answers.forEach(answer => answer.removeEventListener("click", selectAnswer));
}

const selectAnswer = (e) => {
  const elem = e.target.closest("[data-answer]");
  const answerId = Number(elem.getAttribute("data-answer"));
  const questionId = Number(elem.getAttribute("data-question"));
  let currentQuestion = questions.find(question => question.id === questionId);
  if (currentQuestion.rightAnswer === answerId) {
    successAnswers++;
    elem.classList.add("success");
  }
  else elem.classList.add("error");
  deleteHandlers();
  setTimeout(() => {
    if (++currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
      testEnded = true;
    }
    render();
  }, 1000);
};

function render() {
  deleteHandlers();
  if (darkTheme) document.body.className = "dark";
  else document.body.className = "";
  document.body.innerHTML = `
    <svg class="logo">
      <use xlink:href="sprite.svg#logo" />
    </svg>
    <div class="container">
      ${
        !testStarted
          ? `<button class="start-button">Начать тест</button>`
          : (!testEnded
            ? `
              <div class="question">
                <h2>${questions[currentQuestionIndex].text}</h2>
                <ol class="question-answers">
                  ${questions[currentQuestionIndex].answers.map(answer => `
                    <li class="question-answers__item" data-answer="${answer.id}" data-question="${currentQuestionIndex + 1}">
                      <span>${answer.text}</span>
                    </li>
                  `).join("")}
                </ol>
              </div>`
            : `
              <div>
                <h2>Ваш счёт: ${successAnswers}/${questions.length}</h2>
                <button class="button-start-again">Начать заново</button>
              </div>
            `)
      }
    </div>`;
  if (testEnded) {
    const buttonStartAgain = document.querySelector(".button-start-again");
    buttonStartAgain.addEventListener("click", startTest);
  }
  if (testStarted) {
    const answers = document.querySelectorAll(".question-answers__item");
    answers.forEach(answer => answer.addEventListener("click", selectAnswer));
  }
  if (!testStarted) {
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", startTest);
  }
}

render();