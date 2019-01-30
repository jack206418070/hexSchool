$(document).ready(function () {
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active").parent().siblings().find("a").removeClass("active");
        $(this).parent().find(".dropdown-open").slideToggle().parent().siblings().find(".dropdown-open").slideUp();
    });

    $('.gotop').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
          scrollTop:0
        }, 1000);
    });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
            delay:3000,
        },
        effect: "slide",
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});