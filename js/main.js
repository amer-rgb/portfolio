$(function(){
    //give active class to active link
    $('.navbar-nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 500) {
            $('.navbar').css({
                "position": "fixed",
                "width": "100%",
                "background":"rgba(251, 251, 251, 0.95)", 
                "z-index": "1200"
            },2000);
         } else{
            $('.navbar').css({
                "position": "static", 
                "background":"transparent"
            });
         }
    });
    
    //isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.fillter-btns button').on('click',function(){
        var value = $(this).attr('data-name'); 
        $grid.isotope({
            filter: value
        });
    });
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        margin:0, 
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })

    //wow
    new WOW().init();
    // gototop
    $(window).scroll(function(){
        $(this).scrollTop() > 500 ? $('.gotoup').fadeIn(1000) : $('.gotoup').fadeOut(1000);
    }); 
    $('.gotoup').click(function(){
        $('html, body').animate({
            scrollTop: "0"
        },600)
    });

   
    
});