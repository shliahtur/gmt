import { data } from "./data";

const root = document.querySelector("#calc");

class Calc {
  constructor() {
    
  }

 addPosition = (e) => {
  const parent = e.target.parentNode;
  const input = parent.querySelector('input');
  input.value = +input.value + 1
}
 removePosition = (e) => {
  const parent = e.target.parentNode;
  const input = parent.querySelector('input');
  if(+input.value > 0){
    input.value = +input.value - 1
  }
}
 renderCounter = () => {
  const counterBtnContainer = document.createElement("div");
  counterBtnContainer.className = "counter-btn-container";

  const minusBtn = document.createElement("button");
  minusBtn.classList += "counter-btn counter-minus-btn";
  minusBtn.addEventListener('click', (e) => removePosition(e))

  const plusBtn = document.createElement("button");
  plusBtn.classList += "counter-btn counter-plus-btn";
  plusBtn.addEventListener('click', (e) => addPosition(e))

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.value = 0
  input.className = "counter-input";

  counterBtnContainer.append(minusBtn, input, plusBtn);

  return counterBtnContainer;
};

 renderPosition = name => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = name;

  const positionBtns = renderCounter();

  positionContainer.append(positionText, positionBtns);

  return positionContainer;
};
 renderPositions = () => {
  const positions = document.createElement("div");
  Object.keys(data).forEach(x => {
    const position = renderPosition(x);
    positions.appendChild(position);
  });
  return positions;
};

 renderCalc = () => {
  const positions = renderPositions();
  root.appendChild(positions);
};
}
export default Calc;
