import { data } from "./data";

const root = document.querySelector("#calc");
const reportRoot = document.querySelector(".report-table");

var state = {
  selected: []
};

const addPosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  input.value = +input.value + 1;

  const positionName = parent.parentNode.querySelector(".position-item-text")
    .innerText;
  const positions = data[positionName];
  const count = state[positionName] ? state[positionName].count + 1 : 1;
  state[positionName] = { count, positions };
  renderBarItem();
};
const removePosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  if (+input.value > 0) {
    input.value = +input.value - 1;
  }
  const positionName = parent.parentNode.querySelector(".position-item-text")
    .innerText;
  const positions = data[positionName];
  const count = state[positionName] ? state[positionName].count - 1 : 0;
  if (count < 1) {
    delete state[positionName];
  } else {
    state[positionName] = { count, positions };
  }
  renderBarItem();
};

const renderReportItem = () => {

}
addItemToState = (item) => {
  state.selected.push({
      name: item.name,
      count: item.count,
      level: item.level,
      price: item.price
  })
}
const renderBarItem = () => {
  const container = document.querySelector(".bar-container");
  container.innerHTML = "";
  for (const el in state) {
    const count = state[el].count;
    const specs = state[el].positions.map(x => x.specialization);
    const levels = state[el].positions.map(x => x.level[0])[0];
    const position = renderPosition(el, count, specs, levels);
    container.append(position);
  }
};

const renderSpecsSelect = data => {
  const specs = document.createElement("select");
  let specOptions = "";
  data.forEach(spec => {
    specOptions += `<option>${spec}</option>`;
  });
  specs.innerHTML = specOptions;
  return specs;
};
const renderLevelsSelect = data => {
  const levels = document.createElement("select");
  let levelsOptions = "";
  for (let el in data) {
    levelsOptions += `<option value=${data[el]}>${el}</option>`;
  }
  levels.innerHTML = levelsOptions;
  return levels;
};


const renderPosition = (name, count, specs, levels) => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = name;
  const positionBtns = renderCounter(count);

  let specsContainer = "";
  if (specs) {
    specsContainer = renderSpecsSelect(specs);
  }

  let levelsContainer = "";
  if (levels) {
    levelsContainer = renderLevelsSelect(levels);
  }

  positionContainer.append(
    positionText,
    positionBtns,
    specsContainer,
    levelsContainer
  );

  return positionContainer;
};

const renderCounter = count => {
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

const renderPositions = () => {
  const positions = document.createElement("div");
  positions.className = "positions-container";
  const positionLabel = document.createElement("div");
  positionLabel.className = "calc-label";
  positionLabel.appendChild(document.createTextNode("Team positions"));
  positions.appendChild(positionLabel);
  const barContainer = document.createElement("div");
  barContainer.className = "bar-container";
  positions.append(barContainer);

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
