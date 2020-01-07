$(function () {
    abaProdutos();
    scrollAncora();
    dinamicMenu();
    backToTop();
    slider();
})

function abaProdutos() {
    //ABA DE PRODUTOS//
    $("#desl-link").click(function (event) {
        event.preventDefault();
        $('.basculantes, .acessorios, .portas, .cancelas').fadeOut();
        setTimeout(function () {
            $('.deslizantes').fadeIn();
        }, 300);
        $('.product-card').removeClass("wow bounceInUp");
        $('.product-card').removeAttr("data-wow-duration");
        $('.product-card').removeAttr("style");
    });
    $("#basc-link").click(function (event) {
        event.preventDefault();
        $('.deslizantes, .acessorios, .portas, .cancelas').fadeOut();
        setTimeout(function () {
            $('.basculantes').fadeIn();
        }, 300);
    });
    $("#canc-link").click(function (event) {
        event.preventDefault();
        $('.deslizantes, .basculantes, .portas, .acessorios').fadeOut();
        setTimeout(function () {
            $('.cancelas').fadeIn();
        }, 300);
    });
    $("#port-link").click(function (event) {
        event.preventDefault();
        $('.deslizantes, .acessorios, .cancelas, .basculantes').fadeOut();
        setTimeout(function () {
            $('.portas').fadeIn();
        }, 300);
    });
    $("#aces-link").click(function (event) {
        event.preventDefault();
        $('.deslizantes, .basculantes, .cancelas, .portas').fadeOut();
        setTimeout(function () {
            $('.acessorios').fadeIn();
        }, 300);
    });

}

function scrollAncora() {
    //SCROLL ANCORA//
    $('.menu a[href^="#"],.main-buttons a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
        if (id == "#contato" || id == "#sobre") {
            $('html, body').animate({
                scrollTop: targetOffset - 60
            }, 500);
        } else {
            $('html, body').animate({
                scrollTop: targetOffset - 90
            }, 500);
        }
    });
}

function dinamicMenu() {
    //MENU ATIVA COM SCROLL
    $(window).on('scroll', function () {
        var wintop = $(this).scrollTop();

        if (wintop >= $('#intro').offset().top) {
            $('.menu a[href^="#intro"]').addClass('active');
            $('.menu a[href^="#sobre"], .menu a[href^="#produtos"], .menu a[href^="#contato"]').removeClass('active');
        }
        if (wintop >= $('#sobre').offset().top - 120) {
            $('.menu a[href^="#sobre"]').addClass('active');
            $('.menu a[href^="#intro"], .menu a[href^="#produtos"], .menu a[href^="#contato"]').removeClass('active');
        }
        if (wintop >= $('#produtos').offset().top - 150) {
            $('.menu a[href^="#produtos"]').addClass('active');
            $('.menu a[href^="#intro"], .menu a[href^="#sobre"], .menu a[href^="#contato"]').removeClass('active');
        }
        if (wintop >= ($('#contato').offset().top) - 100) {
            $('.menu a[href^="#contato"]').addClass('active');
            $('.menu a[href^="#intro"], .menu a[href^="#produtos"], .menu a[href^="#sobre"]').removeClass('active');
        }
    })

}

function backToTop() {
    //BACK TO TOP APARECE COM SCROLL
    $(window).on('scroll', function () {
        var wintop = $(this).scrollTop();

        if (wintop >= $('#sobre').offset().top) {
            $('#back-to-top').fadeIn("slow");
        } else {
            $('#back-to-top').fadeOut("slow");
        }
    })

    //VOLTA PRO TOPO AO CLIQUE
    $('#back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    })
}

function slider() {
    //SLICK
    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true
    });
}

//ESCONDE O LOADING
function _loadHide(){
    $("body").removeClass("hidden");
    $(".loading").addClass("checked");
}

//PINTA DE LARANJA O TITULO DSA ABA DE PRODUTOS ATIVADA
$('.type-automatizador a').click(function(e){
    e.preventDefault();
    $('.type-automatizador a').removeClass('active');
    $(this).toggleClass('active');
})