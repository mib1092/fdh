jQuery(document).ready(function($) {

	//header background on scroll
	var anchors = $('#anchors'),
        offsetAnchors = anchors.offset().top;
	function stickyNav() {
        var st2 = $(this).scrollTop();

        if (st2 > offsetAnchors) {
            anchors.addClass('fixed');
        } else {
            anchors.removeClass('fixed');
        }
    }
    function anchorsMinHeight() {
        anchors.parent('.anchors-wrap').css('min-height', anchors.outerHeight());
    }
    $(window).scroll(function() {
        stickyNav();
    });
	$(window).load(function() {
        anchorsMinHeight();
        stickyNav();
    });
    $(window).resize(function() {
        anchors.removeClass('fixed');
        anchorsMinHeight();
        offsetAnchors = anchors.offset().top;
        stickyNav();
    });


    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay, .mobile-menu-box a').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });


    // for smooth scroll
	// if ( $('a').is('.smooth-scroll') ) {
        smoothScroll.init({
            selector: 'a', // Selector for links (must be a class, ID, data attribute, or element tag)
            speed: 500, // Integer. How fast to complete the scroll in milliseconds
            easing: 'easeInQuad', // Easing pattern to use
            offset: 80 // Integer. How far to offset the scrolling anchor location in pixels
        });
    // }

});