import {data} from './data';

const root = document.querySelector("#calc");
const calc = document.createElement("div");

// render position names 

Object.keys(data).forEach(x => {     
  const positionName = document.createElement("div");
  positionName.innerText = x;
  calc.appendChild(positionName);
});
root.appendChild(calc);
