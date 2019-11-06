// (function ($) {
//     "use strict"; 
//  /*[ Fixed Header ]
//     ===========================================================*/
//     var header = $('header');
//     var logo = $(header).find('.logo img');
//     var linkLogo1 = $(logo).attr('src');
//     var linkLogo2 = $(logo).data('logofixed');


//     $(window).on('scroll',function(){
//         if($(this).scrollTop() > 5 && $(this).width() > 992) {
//             $(logo).attr('src',linkLogo2);
//             $(header).addClass('header-fixed');
//         }
//         else {
//             $(header).removeClass('header-fixed');
//             $(logo).attr('src',linkLogo1);
//         }

//     });
// })(jQuery);




$("#desl-link").click(function (event) {
    event.preventDefault();
    $('.basculantes').fadeOut();
    $('.cancelas').fadeOut();
    $('.portas').fadeOut();
    $('.acessorios').fadeOut();
    setTimeout(function(){
        $('.deslizantes').fadeIn();
    },300);
});
$("#basc-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').fadeOut();
    $('.cancelas').fadeOut();
    $('.portas').fadeOut();
    $('.acessorios').fadeOut();
    setTimeout(function(){
        $('.basculantes').fadeIn() ;
    },300);
});
$("#canc-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').fadeOut();
    $('.basculantes').fadeOut();
    $('.portas').fadeOut();
    $('.acessorios').fadeOut();
    setTimeout(function(){
        $('.cancelas').fadeIn();
    },300);
});
$("#port-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').fadeOut();
    $('.basculantes').fadeOut();
    $('.cancelas').fadeOut();
    $('.acessorios').fadeOut();
    setTimeout(function(){
        $('.portas').fadeIn();
    },300);
});
$("#aces-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').fadeOut();
    $('.basculantes').fadeOut();
    $('.cancelas').fadeOut();
    $('.portas').fadeOut();
    setTimeout(function(){
        $('.acessorios').fadeIn();
    },300);
});
