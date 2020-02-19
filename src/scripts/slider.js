import $ from "jquery";
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const renderSlider = () => 
{
   $(document).ready(function(){
      $('.office-slider').slick({  // .testemonials-slider
         centerMode: true,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true, 
         autoplaySpeed: 2500,
         infinite: true,
         pauseOnHover: false,
         draggable:true,    
         adaptiveHeight: true,
         responsive: [
            {
              breakpoint: 1100,
              settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            } 
          ]
      });
      $('.test-slider').slick({  // .testemonials-slider
         slidesToShow: 1,
         slidesToScroll: 1,
         draggable:true,    
         dots: true,
         prevArrow: $('.prev'),
         nextArrow: $('.next'),
      });
    });
}

export default renderSlider;