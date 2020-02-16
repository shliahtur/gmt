import Glide from '@glidejs/glide'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";


let config = { 
    type: 'carousel',
    perView:  window.innerWidth >= 900 ? 3 : 1 ,
    focusAt: 'center',
}


window.onresize = function (e) {
   let width = e.target.outerWidth
   if(width >= 900){
     config.perView = 1;
     renderSlider();
   }
}

const renderSlider = () => 
{
   return [
       new Glide('.office-slider', config).mount(),
       new Glide('.testemonials-slider').mount()
   ]
}

export default renderSlider;