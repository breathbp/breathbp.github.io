'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow")
        .queue(function(next) {
            if ( $('.hero__slider').length ) {
                $('.hero__slider').trigger('play.owl.autoplay');
                $('#logoIntroVideo').get(0).play();
                const $owlDots = $('.owl-dots .owl-dot');
                const sliderTitles = ['Home', 'Slogan', 'Informatique', 'Télécommunication', 'Électricité Industrielle', 'Énergie', 'Automatisme', 'Systèmes Anti-Incendie', 'Vidéo Surveillance', 'Internet des Objets', 'Recherche et développement'];
                $.each($owlDots, function (i, owlDot) {
                    const $hint =  $(`<div class="position-grid__cell hint--top mb-0 mr-3 owl-dot-container" aria-label="${sliderTitles[i]}"></div>`);
                    $hint.append($(owlDot).clone());
                    $(owlDot).replaceWith($hint);
                });
            }
            
            next();
        });
        
        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        // smartSpeed: 8000,
        autoplayTimeout: 8500,
        autoHeight: false,
        autoplay: false,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    $('.hero__slider').on('changed.owl.carousel', function(event) {
        const index = event['page']['index'];
        if (index == 0) {
            const video = document.getElementById('logoIntroVideo');
            video.pause();
            video.load();
            video.play();
        }
    });

    $('.activities-section li.hex').on('mouseenter', function(){
        if ($(this).find('video').length) {
            $(this).find('video').get(0).play();
        }
    });

    $('.activities-section li.hex').on('mouseleave', function(){
        if ($(this).find('video').length) {
            $(this).find('video').get(0).pause();
        }
    });

    document.querySelectorAll('a.go-to-section[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
			} else {
				siteHeader.removeClass('fixed-header');
			}
		}
	}

	headerStyle();

    $(window).on('scroll', function() {
		headerStyle();
        if ($(window).scrollTop() > 300) {
            $('#goBackToTopBtn').removeClass('hide').addClass('show');        
        }
        else {
            $('#goBackToTopBtn').removeClass('show').addClass('hide');
        }
	});


    let CurrentScroll = null;
    function scrollIsDown()
    {
        const NextScroll = $(window).scrollTop();
        const isDown = NextScroll > CurrentScroll;
        CurrentScroll = NextScroll;
        return isDown;
    }

    function throttle(callback, delay)
    {
        let time = Date.now();

        return () => {
            const timeDiff = ( time + delay ) - Date.now();
            if( timeDiff <= 0) {
                callback();
                time = Date.now();
            }
        }

    }

    $(document).on('scroll', throttle(() => {
        if (scrollIsDown()) {
            $('header').removeClass('scroll-up').addClass('scroll-down');
        } else {
            $('header').removeClass('scroll-down').addClass('scroll-up');
        }
    }, 100));

    $('#hexGrid .hexLink, .consult-service-btn').on('click', function(e){
        const sectionId = $(this).data('section-id');
        $(`#${sectionId}`).removeClass('hide').addClass('show');
    });

    $('.consult-service-btn').on('click', function(e){
        $('.hero__slider').trigger('stop.owl.autoplay');
    });

    $('.arrow-left-icon-container').on('click', function(){
        $(this).closest('.activity-section').removeClass('show').addClass('hide');
        $('.hero__slider').trigger('play.owl.autoplay');
    });

    AOS.init({
        duration: 2500,
    });

    // $('.hero__slider').trigger('stop.owl.autoplay');
    // $('.hero__slider').trigger('play.owl.autoplay');

    $('.pause-home-slider-btn').on('click', function(){
        if ( $(this).find('i.fa-pause').length ) {
            $('.pause-home-slider-btn').find('i').removeClass('fa-pause').addClass('fa-play');
            $('.hero__slider').trigger('stop.owl.autoplay');
        }
        else {
            $('.pause-home-slider-btn').find('i').removeClass('fa-play').addClass('fa-pause');
            $('.hero__slider').trigger('play.owl.autoplay');
        }
    });

    $('.audio-home-slider-btn').on('click', function(){
        if ( $(this).find('i.fa-volume-up').length ) {
            $('.audio-home-slider-btn').find('i').removeClass('fa-volume-up').addClass('fa-volume-off');
            document.getElementById('introAudio').play();
        }
        else {
            $('.audio-home-slider-btn').find('i').removeClass('fa-volume-off').addClass('fa-volume-up');
            document.getElementById('introAudio').pause();
        }
    });

    $('#goBackToTopBtn ').on('click', function(){
        document.querySelector('#homeHref').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const $firstIntroVideo = $('.introVideo').eq(0);
    $firstIntroVideo.on('loadeddata', function(){
        const viewportHeight = $('.introVideo').eq(0).height();
        $('.hero__item.not-first .black-layout').height( viewportHeight - 64 );
        $('.hero__slider').height( viewportHeight );
    });



})(jQuery);