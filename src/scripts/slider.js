import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const renderSlider = () => 
{
   $(document).ready(function(){
      $('.office-slider').slick({  // .testemonials-slider
         centerMode: true,
         centerPadding: '60px',
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true, 
         autoplaySpeed: 2500,
         infinite: true,
         pauseOnHover: false,
         draggable:true,    
         adaptiveHeight: true,
         
      });
    });
}

export default renderSlider;