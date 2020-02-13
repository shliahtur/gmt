import './styles/style.css';
import Calc from './scripts/calc';
import renderSlider from './scripts/slider';


Calc = new Calc();
Calc.renderCalc();
renderSlider();

// $(".table-tab-wr").on("click", ".tab", function() {
//     // Удаляем классы active
//     $(".table-tab-wr .tab").removeClass('active');
 
//     // Добавляем классы active
//     $(this).addClass('active');
// });
// console.log(123)
