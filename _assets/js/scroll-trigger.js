(function($){
    $(".scroll-trigger").on('click', function () {
        var element = $(this).data('element');

        $([document.documentElement, document.body]).animate({
            scrollTop: $('#'+element).offset().top - 180
        }, 1000);
    });
})(jQuery);
