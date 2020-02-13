import './styles/style.css';
import renderSlider from './scripts/slider';
import renderCalc from './scripts/calc';


renderCalc();
renderSlider();



var tableTexts = document.getElementsByClassName('table-text');

for (let i = 0; i < tableTexts.length; i++) {
    if (tableTexts[i].parentElement.className === 'table-item' && tableTexts[i].innerHTML === '') {
        tableTexts[i].parentElement.style.listStyle = 'none'
    }
}
