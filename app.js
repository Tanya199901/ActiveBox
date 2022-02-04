$(function () { // загрузка всего документа дожидаемся и только потом что то делаем с дом элеменатми

    // Fixed Header 
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll 
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault(); // отменяем стандартное поведение ссылки при клике
        let elementId = $(this).data('scroll');
        // console.log(elementId); // elID is string 
        // надо получить позицию элемента от верха страницы
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70 // скроллим на значение элОфф
        }, 700);
    }); // выборка элемента с аттрибутом дата скролл


    // Nav Toggle 
    navToggle.on("click ", function (event) {
        event.preventDefault();

        nav.toggleClass("show")
    });


    // Reviews: https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
});