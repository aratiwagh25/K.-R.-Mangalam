$(document).ready(function(){
    // Event Section Slider
    $('.event__discussion__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    });

    // student info slider
    $('.student-info__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        
    });

    // Growth Testimonial
    $('.growth__testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        
    })

    // Toggle function
    $('#toggle-icon').click(function(){
        $('.dc-nav__listing').addClass('responsive');
      
    });
    $('#close-icon').click(function(){
      $('.dc-nav__listing').removeClass('responsive');
    });    
});