import Glide from '@glidejs/glide'
import "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css";
import "../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css";


const config = { 
    type: 'carousel',
    perView: 3,
}
const renderSlider = () => 
{
   return new Glide('.glide', config).mount()
}

export default renderSlider;