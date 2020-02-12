import { data } from "./data";

const root = document.querySelector("#calc");

const renderCounter = () => {
  const counterBtnContainer = document.createElement("div");
  counterBtnContainer.className = "counter-btn-container";

  const minusBtn = document.createElement("button");
  minusBtn.classList += "counter-btn counter-minus-btn";

  const plusBtn = document.createElement("button");
  plusBtn.classList += "counter-btn counter-plus-btn";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.className = "counter-input";

  counterBtnContainer.append(minusBtn, input, plusBtn);

  return counterBtnContainer;
};

const renderPosition = name => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = name;

  const positionBtns = renderCounter();

  positionContainer.append(positionText, positionBtns);

  return positionContainer;
};

const renderPositions = () => {
  const positions = document.createElement("div");
  Object.keys(data).forEach(x => {
    const position = renderPosition(x);
    positions.appendChild(position);
  });
  return positions;
};

const renderCalc = () => {
  const positions = renderPositions();
  root.appendChild(positions);
};

export default renderCalc;
