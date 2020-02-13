import { data } from "./data";

const root = document.querySelector("#calc");

var state = {};

const addPosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  input.value = +input.value + 1;

  const positionName = parent.parentNode.querySelector(".position-item-text").innerText;
  const positions = data[positionName];
  const count = state[positionName] ? state[positionName].count + 1 : 1;
  state[positionName] = { count, positions };
  renderBar();
};

const removePosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  if (+input.value > 0) {
    input.value = +input.value - 1;
  }
  const positionName = parent.parentNode.querySelector(".position-item-text").innerText;
  const positions = data[positionName];
  const count = state[positionName] ? state[positionName].count - 1 : 0;
  if(count < 1){
      delete state[positionName]
  }
  else{
      state[positionName] = { count, positions };
  }
  renderBar();
};
const renderBar = () => {
    const container = document.querySelector('.bar-container');
    container.innerHTML = ''
    for(const el in state){
      const count = state[el].count;
      const selects = { 
        levelOptions: state[el].positions,
        specOptions: state[el].positions 
      }
      const position = renderPosition(el, count, selects)  
      container.append(position)
    }
    console.log(state)
}
const renderSelect = (data) => {
  // const level = document.createElement('select')
  // let levelOptions = "";
  // data.levelList.forEach(el => {
  //   levelOptions += "<option>" + el + "</option>"
  // });
  // level.innerHTML = levelOptions;

  // const spec = document.createElement('select')
  // let specOptions = "";
  // data.specList.forEach(el => {
  //   specOptions += "<option>" + el + "</option>"
  // });
  // spec.innerHTML = specOptions;
  const selectsContainer = document.createElement('div');
 // selectsContainer.append(level, spec);
  return selectsContainer;
}
const renderCounter = (count) => {
  const counterBtnContainer = document.createElement("div");
  counterBtnContainer.className = "counter-btn-container";

  const minusBtn = document.createElement("button");
  minusBtn.classList += "counter-btn counter-minus-btn";
  minusBtn.addEventListener("click", e => removePosition(e));

  const plusBtn = document.createElement("button");
  plusBtn.classList += "counter-btn counter-plus-btn";
  plusBtn.addEventListener("click", e => addPosition(e));

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.value = count ? count : 0;
  input.className = "counter-input";

  counterBtnContainer.append(minusBtn, input, plusBtn);

  return counterBtnContainer;
};

const renderPosition = (name, count, selects) => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = name;

  const positionBtns = renderCounter(count);
  let selectsContainer = null;
  if(selects){
    selectsContainer = renderSelect(selects);
  }

  positionContainer.append(positionText, positionBtns, selectsContainer);

  return positionContainer;
};
const renderPositions = () => {
  const positions = document.createElement("div");
  positions.className = "positions-container";
  
  const positionLabel = document.createElement("div");
  positionLabel.className = "calc-label";
  positionLabel.appendChild(document.createTextNode("Team positions"));
  positions.appendChild(positionLabel);
  const barContainer = document.createElement('div');
  barContainer.className = "bar-container";
  positions.append(barContainer)
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
