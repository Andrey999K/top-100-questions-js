import "./main.scss";
import questions from "./data/questions.json";
import shuffle from "./utils/shuffle";

const randomizeQuestions = () => {
  return shuffle(questions).map(question => ({ ...question, answers: shuffle(question.answers) }));
};

let randomQuestions = randomizeQuestions();

let testStarted = false;
let testEnded = false;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let darkTheme = false;
let score = 0;
let time = `Время: 00:00.0`;
let timer = null;

const createElement = (tag, className) => {
  const elem = document.createElement(tag);
  elem.className = className;
  return elem;
};

const setDarkTheme = (value) => {
  console.log(value !== darkTheme);
  console.log(value, darkTheme);
  if (value !== darkTheme) {
    darkTheme = value;
    localStorage.setItem("dark-theme", value);
    switchTheme.classList.toggle("dark");
    document.body.classList.toggle("dark");
  }
}

const switchTheme = createElement("div", "switch-theme");
switchTheme.innerHTML = `<div class="switch-theme__circle"></div>`;
document.body.append(switchTheme);
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setDarkTheme(true);
  switchTheme.classList.add("dark");
  document.body.classList.add("dark");
}

const timerElem = createElement("div", "timer");
document.body.append(timerElem);

const renderTimer = () => {
  timerElem.innerHTML = time;
};

const renderScore = (statusAnswer) => {
  console.log()
  document.querySelector(".result").innerHTML = `
  <div class="result">
    <p class="result__right-answers">${rightAnswers + "/" + randomQuestions.length}</p>
    <div class="result__score">
      <p>Очки: ${score}</p>
      <p class="question-points">${statusAnswer ? `+${randomQuestions[currentQuestionIndex].points}` : "" }</p>
    </div>
  </div>
  `
}

switchTheme.addEventListener("click", () => {
  setDarkTheme(!darkTheme);
});

const content = createElement("div", "content");
document.body.append(content);

const formatTime = (seconds) => {
  seconds %= 60;
  return seconds < 10 ? `0${seconds}` : String(seconds);
};

const startTimer = () => {
  let second = 0;
  timer = setInterval(() => {
    second += 1;
    time = `Время: ${formatTime(Math.floor(second / 600))}:${formatTime(Math.floor(second / 10))}.${second % 10}`;
    renderTimer();
  }, 100)
};

const startTest = () => {
  randomQuestions = randomizeQuestions();
  rightAnswers = 0;
  score = 0;
  currentQuestionIndex = 0;
  testStarted = true;
  clearInterval(timer);
  startTimer();
  testEnded = false;
  renderContent();
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
  const elem = e.currentTarget;
  const answerId = Number(elem.getAttribute("data-answer"));
  const questionId = Number(elem.getAttribute("data-question"));
  let currentQuestion = randomQuestions.find(question => question.id === questionId);
  const right = currentQuestion.rightAnswer === answerId;
  if (right) {
    rightAnswers++;
    score += currentQuestion.points;
    elem.classList.add("success");
  }
  else elem.classList.add("error");
  deleteHandlers();
  renderScore(right);
  if (++currentQuestionIndex >= randomQuestions.length) clearInterval(timer);
  setTimeout(() => {
    if (currentQuestionIndex >= randomQuestions.length) {
      currentQuestionIndex = 0;
      testEnded = true;
    }
    renderContent();
  }, 1500);
};

function renderContent() {
  console.log("FFF");
  setDarkTheme(JSON.parse(localStorage.getItem("dark-theme")) || false);
  deleteHandlers();
  if (darkTheme) document.body.className = "dark";
  else document.body.className = "";
  content.innerHTML = `
    <svg class="logo">
      <use xlink:href="sprite.svg#logo" />
    </svg>
    <div class="container">
      ${
        !testStarted
          ? `<button class="start-button">Начать тест</button>`
          : (!testEnded
            ? `
              <div class="result">
                <p class="result__right-answers">${rightAnswers + "/" + randomQuestions.length}</p>
                <div class="result__score">
                  <p>Очки: ${score}</p>
                  <p class="question-points"></p>
                </div>
              </div>
              <div class="question">
                <h2 class="question__text">${(currentQuestionIndex + 1) + ") " + randomQuestions[currentQuestionIndex].text}</h2>
                ${randomQuestions[currentQuestionIndex].img
                  ? `<div class="question__wrapper-image">
                      <img class="question__image" src="${randomQuestions[currentQuestionIndex].img}" alt="">
                    </div>`
                  : ""
                }
                <ol class="question-answers">
                  ${randomQuestions[currentQuestionIndex].answers.map((answer) => `
                    <li class="question-answers__item" data-answer="${answer.id}" data-question="${randomQuestions[currentQuestionIndex].id}">
                      <span>${answer.text}</span>
                    </li>
                  `).join("")}
                </ol>
              </div>`
            : `
              <div class="result">
                <h2>Ваш счёт: ${rightAnswers}/${randomQuestions.length}</h2>
                <p>Очки: ${score}</p>
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

renderContent();
