const $header = $('.header');

$(window).on('scroll', function() {
    const scrollTop = $('body, html').scrollTop();
    const offset = $('.brand-bar').offset().top;

    if (scrollTop >= offset) {
        $header.addClass('header_sticky');
        
        const height = $header.outerHeight();
        $header.css('top', -height);
        $header.animate({top:0}, 300)

        $(".backtostart").css("visibility","visible");
    } else if (scrollTop < 30) {
        $header.removeClass('header_sticky');
        $(".backtostart").css("visibility","hidden");
    }

    
})


$('.nav-toggle').on('click', function(){
    const $nav = $('.nav');
    const height = $header.outerHeight();

    $nav.toggleClass('nav_active');
    const $body = $('body');

    if ($nav.hasClass('nav_active')) {
        
        $nav.css("top", height);
        $body.css("overflow", "hidden");
    } else {
        $body.css("overflow", "");
    }



})


$('[href^="#anchor"]').on("click", function(event) {
    event.preventDefault();

    const $link = $(this);
    const selector = $link.attr('href');
    // const time = $link.attr('data-count');

    const $target = $(selector);
    const height = $('header').outerHeight() - 20;

    const offset = $target.offset().top - height;

    // $('html, body').animate({scrollTop: offset}, time*300);
    $('html, body').animate({scrollTop: offset}, 500);

    const $body = $('body');

    $('.nav').removeClass('nav_active');
    $body.css("overflow", "");
})


$('.tabs-nav__item').each(function() {
    const $target = $(this);

    $target.on("click", function() {
        const $targetBtn = $(this);
        const index = $targetBtn.attr('data-index');

        $('.tabs-content__item_active').removeClass('tabs-content__item_active');

        const $tab = $(`[data-tab="${index}"]`);
        $tab.addClass('tabs-content__item_active');

        $('.tabs-nav__item_active').removeClass('tabs-nav__item_active');

        $targetBtn.addClass('tabs-nav__item_active');

    })
})


$('.process__grid').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 981,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

$('.pricing__grid').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 981,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

$('.tesimonails__grid').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    dots: true,
    responsive: [
        {
            breakpoint: 981,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 641,
            settings: {
                slidesToShow: 1
            }
        }
    ]
})

