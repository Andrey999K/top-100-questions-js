import "./main.scss";

const createElement = (tag, classes) => {
  const elem = document.createElement(tag);
  elem.className = classes;
  return elem;
}

const startButton = createElement("button", "start-button")
startButton.textContent = "Начать тест";


document.body.append(startButton);