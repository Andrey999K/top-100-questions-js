import "./main.scss";
import questions from "./data/questions.json";

let testStarted = false;
let testEnded = false;
let currentQuestionIndex = 0;
let successAnswers = 0;

const startTest = () => {
  testStarted = true;
  render();
};

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
  setTimeout(() => {
    if (++currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
      testEnded = true;
    }
    render();
  }, 1000);
};

function render() {
  if (testStarted && document.querySelector(".start-button")) {
    document.querySelector(".start-button").removeEventListener("click", startTest);
  }
  document.body.innerHTML = `
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
              </div>
            `)
      }
    </div>`;
  if (testStarted) {
    const answers = document.querySelectorAll(".question-answers__item");
    answers.forEach(answer => answer.addEventListener("click", selectAnswer));
  }
  if (!testStarted) document.querySelector(".start-button").addEventListener("click", startTest);
}

render();