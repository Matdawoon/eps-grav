jQuery(function($) {

    'use strict';

    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function() {
        console.log("création toTop");

        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


}); // JQuery end