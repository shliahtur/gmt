import Glide from '@glidejs/glide'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";


const config = { 
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
}

const renderSlider = () => 
{
   return [
       new Glide('.office-slider', config).mount(),
       new Glide('.testemonials-slider').mount()
   ]
}

export default renderSlider;