import Glide from '@glidejs/glide'
import './styles/style.css';
import "../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";

const glideConfig = { 
autoplay: true,
duration: 3000
}

new Glide('.glide', glideConfig).mount()

// $(".table-tab-wr").on("click", ".tab", function() {
//     // Удаляем классы active
//     $(".table-tab-wr .tab").removeClass('active');
 
//     // Добавляем классы active
//     $(this).addClass('active');
// });
// console.log(123)