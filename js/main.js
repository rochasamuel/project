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
    $('.deslizantes').addClass('ativo').data("aos", "fade-right");
    $('.basculantes').removeClass('ativo');
    $('.cancelas').removeClass('ativo');
    $('.portas').removeClass('ativo');
});
$("#basc-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').removeClass('ativo');
    $('.basculantes').addClass('ativo').data("aos", "fade-right");
    $('.cancelas').removeClass('ativo');
    $('.portas').removeClass('ativo');
});
$("#canc-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').removeClass('ativo');
    $('.basculantes').removeClass('ativo');
    $('.cancelas').addClass('ativo');
    $('.portas').removeClass('ativo');
});
$("#port-link").click(function (event) {
    event.preventDefault();
    $('.deslizantes').removeClass('ativo');
    $('.basculantes').removeClass('ativo');
    $('.cancelas').removeClass('ativo');
    $('.portas').addClass('ativo').data("aos", "fade-right");
});