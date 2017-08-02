jQuery(document).ready(function($) {

    //header background on scroll
    var anchors = $('#anchors');
    if ( $(anchors).length ) {
        var offsetAnchors = anchors.offset().top;

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
    }


    // for burger menu
    $('.mobile-menu-toggle, .mobile-menu-overlay, .mobile-menu-box a').on('click', function(){
        $('.mobile-menu-toggle').toggleClass('active');
        $('.mobile-menu-wrap').toggleClass('showing');
        $(document.body).toggleClass('overflow');
    });


    // for WP Triggers inputs
    setTimeout(function () {
        $('.wptrigger1-triggerbox, .wptrigger1-button').attr('style', '');
    }, 100);


    // for contact forms in preheader
    $('.form-box .wpcf7:first-of-type input[name="your-name"]').on('input', function(){
        var name = $(this).val();
        $('.form-box .wpcf7:not(:first-of-type) input[name="your-name"]').val(name);
    });
    // for Ideal time to call field
    $('.form-box, .footer-form').find('.hidden-field').prev().find('input').on('input', function(){
        var hidden_field = $(this).closest('p').next('.hidden-field');
        if ( $(this).val() ) {
            hidden_field.slideDown(350);
        } else {
            hidden_field.slideUp(350);
        }
    });


    // for scroll active link
    var arrayAnchorBlock = $('.content *[id]');
    $(window).on('load scroll', function(){
        var curPositionWindow   = $(window).scrollTop(),
            curClickElement     = $('.anchors-list a');

        var arrayValuesPosAnchorElems = [];

        arrayAnchorBlock.each(function(){
            arrayValuesPosAnchorElems.push($(this).offset().top - 100);
        });

        arrayValuesPosAnchorElems.forEach(function(element, index){
            if(curPositionWindow >= element - 150) {
                curClickElement.removeClass('active').eq(index).addClass('active');
            }
            else if(curPositionWindow < arrayValuesPosAnchorElems[0]) {
                curClickElement.removeClass('active');
            }
        });
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

    /*
    *
    * Mascot Animations
    *
    */

    /* global $ */
    var currentFps = 12;
    var animationSettings = {
        fps: currentFps,
        loop: false,
        autoplay: false,
        animations: {
            turnin: [0,1,2,3],
            turnout: [3,2,1,0],
            turnoutin: [3,2,1,0,0,0,0,0,0,1,2,3],

            blink: [4,4, 3,3, 4,4, 3,3],

            tap: [8,8,7,7,8,8,7,7],
            shrug: [5, 6, 6, 6, 6, 5, 3],
            smile: [9],
            startover: [0]
        },
        complete: function(){
            // this will be called when
            // there is no loop and the
            // animation finishes
            console.log('animation End');
        }
    };

    var minimascotAnimationSettings = {
        fps: currentFps,
        loop: true,
        autoplay: true,
        animations: {
            playmini: [2,1,0,1]
        },
        complete: function(){

        }
    };


    $('.mascot').animateSprite(animationSettings);
    $('.minimascot').animateSprite(minimascotAnimationSettings);
    // $('.mascot').animateSprite('play');

    var playmini = function(){
        $('.minimascot').animateSprite('play', 'playmini');
    };

    var turnin = function(){
        $('.mascot').animateSprite('play', 'turnin');
    };

    var turnout = function(){
        $('.mascot').animateSprite('play', 'turnout');
    };

    var turnoutin = function(){
        $('.mascot').animateSprite('play', 'turnoutin');
    };

    var blink = function(){
        $('.mascot').animateSprite('play', 'blink');
    };

    var tap = function(){
        $('.mascot').animateSprite('play', 'tap');
    };

    var shrug = function(){
        $('.mascot').animateSprite('play', 'shrug');
    };

    var smile = function(){
        $('.mascot').animateSprite('play', 'smile');
    };

    function playMascot(){
        setTimeout(turnin, 2000);
        var blinking = setInterval(blink, 5000);
        var shrugging = setInterval(shrug, 9000);
        var tapping = setInterval(tap, 7000);
        var reposition = setInterval(turnoutin, 19000);
    }
    // playmini();
    // setInterval(function(){$('.minimascot').animateSprite('restart');}, 6500);

    //smile when the user hovers over the field
    $(".wptrigger1-triggerbox").on("hover", function() {
        smile();
    });

    //set position of line below mascot
    function alignWallLine() {
       if($('#mascot').length) {
         var mascot = $('#mascot'),
               wallLine = $('#wall-line'),
               mascotOffset = mascot.offset(),
               mascotTop = mascotOffset.top,
               mascotHeight = mascot.height(),
               topPosition = mascotTop +  (mascotHeight * 0.76114285714286);


            wallLine.css("top",topPosition + "px");
        }

    }


    $(window).on('resize', function(){
           alignWallLine();

           //The sprite animation feature does not properly reset on window resize
           //so I am refreshing the window to start fresh.
           if($('body').hasClass('home')){
                location.reload();
           }
    });

    //initiate functions
    playMascot();
    alignWallLine();
    setTimeout(alignWallLine, 250); //sometimes it doesn't load right away, so this will gaurantee it.

    /*End mascot animation settings*/

});