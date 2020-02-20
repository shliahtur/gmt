import { data } from "./data";
import createModal from "./modal";

const root = document.querySelector("#calc");
const reportRoot = document.querySelector(".report-table tbody");
const totalRoot = document.querySelector(".report-total-value");

var state = {};

const addPosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  ++input.value;
  const position = parent.parentNode.querySelector(".position-item-text")
    .innerText;
  const dictionaries = data[position];
  const item = {
    position,
    count: 1,
    dictionaries,
    specialization: dictionaries[0].specialization,
    level: Object.entries(dictionaries[0].levels)[0][0],
    price: Object.entries(dictionaries[0].levels)[0][1]
  };
  let id = parent.parentNode.id;
  if (id) {
    ++state[id].count;
    renderBarItems();
    renderReportItems();
    renderCountersValue();
  } else {
    id = Object.keys(state).length + 1;
    state[id] = item;
    renderBarItems();
    renderReportItems();
    renderPositionModal(id);
    renderBarItems();
    renderCountersValue();
  }
};

const renderPositionModal = id => {
  if (window.innerWidth < 1000) {
    const inner = document.getElementById(id);
    const innerSelects = inner.querySelector(".selects-container");
    const counter = inner.querySelector(".counter-btn-container");
    const position = inner.querySelector(".position-item-text");
    const levelSelect = innerSelects.firstChild;
    innerSelects.style.cssText =
      "display:flex; justify-content: center; flex-direction: column; position: initial; left: 0;";
    const specSelect = innerSelects.children[1];
    specSelect.style.cssText = "width: 100%; margin: 30px 0; display: flex;";
    counter.style.display = "none";
    position.style.display = "none";
    levelSelect.style.display = "none";

    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.className = "calc-next-btn";
    nextBtn.addEventListener("click", () => {
      renderLevelModal(inner);
    });
    innerSelects.appendChild(nextBtn);
    const label = document.createElement("div");
    label.innerText = "Candidate Specialization";
    label.className = "calc-model-label";
    inner.prepend(label);
    createModal(inner);
  }
};
const renderLevelModal = inner => {
  const innerSelects = inner.querySelector(".selects-container");
  const counter = inner.querySelector(".counter-btn-container");
  const position = inner.querySelector(".position-item-text");
  const nextBtn = inner.querySelector(".calc-next-btn");
  const specSelect = innerSelects.children[1];
  const levelSelect = innerSelects.firstChild;
  levelSelect.style.cssText = "width: 100%; margin: 30px 0; display: flex;";
  specSelect.style.display = "none";
  counter.style.display = "none";
  position.style.display = "none";
  nextBtn.style.display = "none";

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.addEventListener("click", () => {
    createModal(false);
  });
  innerSelects.appendChild(saveBtn);
  const label = inner.querySelector(".calc-model-label");
  label.innerText = "Level";
  createModal(inner);
};

const removePosition = e => {
  const parent = e.target.parentNode;
  let id = parent.parentNode.id;
  const input = parent.querySelector("input");
  const position = parent.parentNode.querySelector(".position-item-text")
    .innerText;
  let lastPosition = "";

  if (+input.value > 0) {
    --input.value;
  }
  if (!id) {
    for (let item in state) {
      if (position === state[item].position) {
        lastPosition = item;
      }
    }
    delete state[lastPosition];
  } else {
    const count = state[id] ? state[id].count - 1 : 0;
    if (count < 1) {
      delete state[id];
    } else {
      state[id] = { ...state[id], count };
    }
  }
  renderBarItems();
  renderReportItems();
  renderCountersValue();
};

const calculateTotal = () => {
  let ItemTotal = 0;
  for (let el in state) {
    const count = state[el].count;
    const price = state[el].price;
    ItemTotal += +count * +price + 1250;
  }
  totalRoot.innerText = ItemTotal;
};

const renderReportItems = () => {
  reportRoot.innerHTML = "";
  for (const el in state) {
    const tr = document.createElement("tr");
    const innerTR = `<tr>
  <td>${state[el].specialization}</td>
  <td>${state[el].level}</td>
  <td class='report-count'>${state[el].count}</td>
  <td class='report-price'>${state[el].price}</td>
  <td>1250</td>
  </tr>`;
    tr.innerHTML = innerTR;
    reportRoot.append(tr);
  }
  calculateTotal();
};
const renderBarItems = () => {
  const container = document.querySelector(".bar-container");
  container.innerHTML = "";
  if (Object.keys(state).length > 0) {
    for (const el in state) {
      const id = el;
      const name = state[el].position;
      const count = state[el].count;
      const specialization = state[el].specialization;
      const level = state[el].level;
      const dictionaries = state[el].dictionaries;
      const position = renderPosition(
        name,
        count,
        specialization,
        level,
        dictionaries,
        id
      );
      container.append(position);
    }
  }
};

const renderCountersValue = () => {
  const container = document.querySelector('.positions-container');
  const positions = [].slice.call(container.children).filter(x => x.className === "position-item-container");
  positions.forEach(position => {
      const name = position.querySelector('.position-item-text').innerText
      const counter = position.querySelector('input');
      let count = Object.values(state).filter(({position}) => position === name).map(x => x.count)
      count = count.length > 0 && 
      count.reduce((sum, count) => sum + count);
      counter.value = count ? count : 0
    });
};

const renderSpecsSelect = (dictionaries, id) => {
  const defaultValue = state[id].specialization;
  const selectContainer = document.createElement("div");
  selectContainer.className = "select";
  selectContainer.setAttribute("style", "width:160px; margin: 0 20px;");
  const specs = document.createElement("select");
  specs.onchange = e => onSpecSelectChange(e);
  let specOptions = "";
  dictionaries.forEach(spec => {
    const value = JSON.stringify(spec.levels);
    specOptions += `<option ${
      spec.specialization === defaultValue ? "selected" : ""
    } value=${value}>${spec.specialization}</option>`;
  });
  specs.innerHTML = specOptions;
  selectContainer.appendChild(specs);
  // customizeSelect(specs);
  return selectContainer;
};

const renderLevelsSelect = (dictionaries, id) => {
  const levelsContainer = document.createElement("select");
  const selectContainer = document.createElement("div");
  selectContainer.className = "select";
  selectContainer.setAttribute("style", "width:120px; ");
  levelsContainer.onchange = e => onLevelSelectChange(e);
  const defaultValue = state[id].level;
  let levelsOptions = "";
  const levels = dictionaries[0].levels;
  for (const level in levels) {
    levelsOptions += `<option ${
      level === defaultValue ? "selected" : ""
    } value=${levels[level]}>${level}</option>`;
  }
  levelsContainer.innerHTML = levelsOptions;
  selectContainer.appendChild(levelsContainer);
  // customizeSelect(selectContainer);
  return selectContainer;
};

const onSpecSelectChange = e => {
  const levelSelect = e.target.parentNode.parentNode.querySelectorAll(
    "select"
  )[0];
  const inner = JSON.parse(e.target.value);
  const specialization = e.target.options[e.target.selectedIndex].text;
  const id = e.target.parentNode.parentNode.parentNode.id;
  const level = Object.keys(inner)[0];
  const price = Object.values(inner)[0];
  e.target.options[e.target.selectedIndex].text;
  state[id] = {
    ...state[id],
    specialization,
    level,
    price
  };
  let levelsOptions = "";
  for (let el in inner) {
    levelsOptions += `<option value=${inner[el]}>${el}</option>`;
  }
  levelSelect.innerHTML = levelsOptions;
  renderReportItems();
};

const onLevelSelectChange = e => {
  const id = e.target.parentNode.parentNode.parentNode.id;
  const price = e.target.value;
  const level = e.target.options[e.target.selectedIndex].text;
  state[id] = {
    ...state[id],
    price,
    level
  };
  renderReportItems();
};

const renderPosition = (
  name,
  count,
  specialization,
  level,
  dictionaries,
  id
) => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = name;
  const positionBtns = renderCounter(count);
  if (id) {
    positionContainer.id = id;
  }

  let specsContainer = "";
  let levelsContainer = "";
  if (dictionaries) {
    specsContainer = renderSpecsSelect(dictionaries, id);
    levelsContainer = renderLevelsSelect(dictionaries, id);
    const selectsContainer = document.createElement("div");
    selectsContainer.className = "selects-container";
    selectsContainer.append(specsContainer, levelsContainer);
    positionContainer.append(positionText, positionBtns, selectsContainer);
  } else {
    positionContainer.append(positionText, positionBtns);
  }

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
