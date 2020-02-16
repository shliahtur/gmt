import { data } from "./data";

const root = document.querySelector("#calc");
const reportRoot = document.querySelector(".report-table tbody");
const totalRoot = document.querySelector('.report-total-value');

var state = {};

const addPosition = e => {
  const parent = e.target.parentNode;
  const input = parent.querySelector("input");
  input.value = +input.value + 1;
  const position = parent.parentNode.querySelector(".position-item-text").innerText
  const dictionaries = data[position]
  const item = {
    position,
    count: 1,
    dictionaries,
    specialization: dictionaries[0].specialization,
    level: Object.entries(dictionaries[0].levels)[0][0],
    price: Object.entries(dictionaries[0].levels)[0][1],
  }

  let id = Object.keys(state).length;
  let isExist = false;
  if (id > 0) {
    for (let el in state) {
      if (_.isEqual(_.omit(state[el], ['count']), _.omit(item, ['count']))) {    // if item is already exist (excluding count property from comparison)
        ++state[el].count;
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      id = ++id;
      state[id] = item;
    }
  }
  else {
    id = ++id;
    state[id] = item;
  }
  renderBarItems();
  renderReportItems();
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
  renderBarItems();
};

const calculateTotal = () => {
 const trs = reportRoot.querySelectorAll('tr')
 let ItemTotal = 0
 trs.forEach(tr => {
   const count = tr.querySelector('.report-count').innerText
   const price = tr.querySelector('.report-price').innerText
    ItemTotal = (+count * +price) + 1250
 });
  totalRoot.innerText = ItemTotal
}

const renderReportItems = () => {
  reportRoot.innerHTML = '';
  for (const el in state) {
  const tr = document.createElement('tr')
  const innerTR = `<tr>
  <td>${state[el].specialization}</td>
  <td>${state[el].level}</td>
  <td class='report-count'>${state[el].count}</td>
  <td class='report-price'>${state[el].price}</td>
  <td>1250</td>
  </tr>`  
  tr.innerHTML = innerTR;
  reportRoot.append(tr)
  }
  calculateTotal();
}
const renderBarItems = () => {
  const container = document.querySelector(".bar-container");
  container.innerHTML = "";
  for (const el in state) {
    const name = state[el].position
    const count = state[el].count;
    const specialization = state[el].specialization;
    const level = state[el].level;
    const dictionaries = state[el].dictionaries;
    const position = renderPosition(name, count, specialization, level, dictionaries);
    container.append(position);
  }
};
const onSpecSelectChange = (e) => {
   const levelSelect = e.target.nextSibling;
   const inner = JSON.parse(e.target.value);
   let levelsOptions = "";
    for (let el in inner) {
      levelsOptions += `<option value=${inner[el]}>${el}</option>`;
    }
   levelSelect.innerHTML = levelsOptions
   
}

const renderSpecsSelect = dictionaries => {
  const specs = document.createElement("select");
  specs.onchange = (e) => onSpecSelectChange(e);
  let specOptions = "";

  dictionaries.forEach(spec => {
    const value = JSON.stringify(spec.levels[0]);
    specOptions += `<option value=${value}>${spec.specialization}</option>`;
  });
  specs.innerHTML = specOptions;
  return specs;
};

const renderLevelsSelect = dictionaries => {
  const levels = document.createElement("select");
  let levelsOptions = "";
  const levels = dictionaries[0].levels
  for(const level in levels){
    levelsOptions += `<option value=${level}>${level}</option>`;
  }
  levels.innerHTML = levelsOptions;
  return levels;
};

const renderPosition = (position, count, specialization, level, dictionaries) => {
  const positionContainer = document.createElement("div");
  positionContainer.className = "position-item-container";

  const positionText = document.createElement("div");
  positionText.className = "position-item-text";
  positionText.innerText = position;
  const positionBtns = renderCounter(count);

  let specsContainer = "";
  let levelsContainer = "";
  if (dictionaries) {
    specsContainer = renderSpecsSelect(dictionaries, specialization);
    levelsContainer = renderLevelsSelect(dictionaries, level);
  }
  const selectsContainer = document.createElement('div');
  selectsContainer.className = "selects-container";
  selectsContainer.append(specsContainer, levelsContainer)

  positionContainer.append(
    positionText,
    positionBtns,
    selectsContainer
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
