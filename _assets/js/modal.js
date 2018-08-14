(function ($) {

    var scroll;

    $('.modal-trigger').on('click', function(ev){
        ev.preventDefault();
        var modal = '#dialog_' + $(this).data('modal-id');

        console.log($(modal));

        scroll = $(window).scrollTop();

        $(modal).addClass('active').closest('.modal-wrapper').addClass('open').closest('html').addClass('modal-open');
    });

    $('div[id^="dialog_"] .close').on('click', function(ev){
        ev.preventDefault();
        
        $(this).closest('div[id^="dialog_"]').removeClass('active').closest('.modal-wrapper').removeClass('open').closest('html').removeClass('modal-open');

        $([document.documentElement, document.body]).animate({
            scrollTop: scroll
        }, 0);
    });

})(jQuery);
