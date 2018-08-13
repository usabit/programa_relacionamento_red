(function($){
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1 },
            425: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
            1025: { items: 4 }
        }
    });
})(jQuery);