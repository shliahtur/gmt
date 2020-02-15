import './styles/style.css';
import renderSlider from './scripts/slider';
import renderCalc from './scripts/calc';


renderCalc();
renderSlider();

const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}



var tableTexts = document.getElementsByClassName('table-text');

for (let i = 0; i < tableTexts.length; i++) {
    if (tableTexts[i].parentElement.className === 'table-item' && tableTexts[i].innerHTML === '') {
        tableTexts[i].parentElement.style.listStyle = 'none'
    }
}

let menuButton = document.getElementById('burger-icon')
menuButton.style.cursor = 'pointer';
menuButton.onclick = function () {
    document.getElementById('modal-menu').style.display = 'block';
    menuButton.classList.add('close-button')
}
