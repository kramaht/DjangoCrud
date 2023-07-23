$(document).ready(function(){    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        dots:false,
        autoplay:true,
        autoplaySpeed:8500,
        pauseOnHover: false,
        pauseOnFocus: false,
      });
     
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',   
        arrows:false,
        dots:false,
        focusOnSelect: true
      });
});

$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $('.nav').addClass('black');
    }else{
        $('.nav').removeClass('black');
    }
});


