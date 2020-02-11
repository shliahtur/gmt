$(document).ready(function(){
    $('.office_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true, 
        autoplaySpeed: 2500,
        dots: true,
        pauseOnHover: false,
        arrows:true,
        responsive: [
            {
              breakpoint: 976,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
               
              }
            } 
          ]
    });
    $('.testimonials_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true, 
      autoplaySpeed: 2500,
      dots: true,
      pauseOnHover: false,
      arrows:true,
      responsive: [
          {
            breakpoint: 976,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
             
            }
          } 
        ]
  });
  });