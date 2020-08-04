/*
  [JS Index]
  
  ---
  
  Template Name: Fasty || Under Construction / Coming Soon Template
  Author:  ex-nihilo
  Version: 1.2
*/


/*
  1. preloader
  2. show elements
    2.1. page loaded
	2.2. page ready
  3. slick slider
  4. page BG
    4.1. page about BG
    4.2. page services BG
    4.3. page works BG
    4.4. page contact BG
  5. to top arrow animation
    5.1. to top arrow scroll to top
  6. facts counter
  7. skills bar
  8. forms
    8.1. newsletter form
    8.2. contact form
  9. countdown
    9.1. countdown timer
	9.2. countdown SETUP
  10. modals
    10.1. sign up modal
      10.1.1. sign up modal additional CLOSER
    10.2. contact modal
      10.2.1. contact modal additional CLOSER
  11. YouTube player
    11.1. highlight YouTube player navigation
  12. swiper slider
    12.1. swiper thumbnail slider horizontal thumbs
  13. typed text
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show elements
        // 2.1. page loaded
        setTimeout(function() {
            $("body").addClass("page-loaded");
        }, 400);
		// 2.2. page ready
        $("body").addClass("page-ready");
		
        // 3. slick slider
        $(".slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: ".home-img-container",
            pauseOnHover: true,
            speed: 800,
            variableWidth: true,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 8000,
        });
        $(".home-img-container").slick({
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".slider",
            dots: false,
            pauseOnHover: true,
            speed: 600,
            variableWidth: true,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 8000,
        });
    });
	
    $(window).on("scroll", function() {
        // 4. page BG
        // 4.1. page about BG
        var topAbout = $("#about").offset().top;
        var setAbout = topAbout + 300;
        var bottomAbout = $("#about").offset().top + $("#about").outerHeight();
        var screenBottomAbout = $(window).scrollTop() + $(window).height();
        var screenTopAbout = $(window).scrollTop();
        if ((screenBottomAbout > setAbout) && (screenTopAbout < bottomAbout)) {
            $(".about-img-container").addClass("img-poster");
        } else {
            $(".about-img-container").removeClass("img-poster");
        }
        // 4.2. page services BG
        var topServices = $("#services").offset().top;
        var setServices = topServices + 300;
        var bottomServices = $("#services").offset().top + $("#services").outerHeight();
        var screenBottomServices = $(window).scrollTop() + $(window).height();
        var screenTopServices = $(window).scrollTop();
        if ((screenBottomServices > setServices) && (screenTopServices < bottomServices)) {
            $(".services-img-container").addClass("img-poster");
        } else {
            $(".services-img-container").removeClass("img-poster");
        }
        // 4.3. page works BG
        var topWorks = $("#works").offset().top;
        var setWorks = topWorks + 300;
        var bottomWorks = $("#works").offset().top + $("#works").outerHeight();
        var screenBottomWorks = $(window).scrollTop() + $(window).height();
        var screenTopWorks = $(window).scrollTop();
        if ((screenBottomWorks > setWorks) && (screenTopWorks < bottomWorks)) {
            $(".works-img-container").addClass("img-poster");
        } else {
            $(".works-img-container").removeClass("img-poster");
        }
        // 4.4. page contact BG
        var topContact = $("#contact").offset().top;
        var setContact = topContact + 300;
        var bottomContact = $("#contact").offset().top + $("#contact").outerHeight();
        var screenBottomContact = $(window).scrollTop() + $(window).height();
        var screenTopContact = $(window).scrollTop();
        if ((screenBottomContact > setContact) && (screenTopContact < bottomContact)) {
            $(".contact-img-container").addClass("img-poster");
        } else {
            $(".contact-img-container").removeClass("img-poster");
        }
		
        // 5. to top arrow animation
        if ($(this).scrollTop() > 500) {
            $(".to-top-arrow").addClass("show");
        } else {
            $(".to-top-arrow").removeClass("show");
        }
    });
    // 5.1. to top arrow scroll to top
    $(".scrollToTop, #menu-mobile-btn").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
	
    // 6. facts counter
    $(".facts-counter-number").appear(function() {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });
	
    // 7. skills bar
    $(".show-skillbar").appear(function() {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });
	
    // 8. forms
    // 8.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 8.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 9. countdown
    $(document).on("ready", function() {
        // 9.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 9.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: "03/03/2019 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 10. modals
    // 10.1. sign up modal
    $(".sign-up-modal-launcher, .sign-up-modal-closer").on("click", function() {
        if ($(".sign-up-modal").hasClass("open")) {
            $(".sign-up-modal").removeClass("open").addClass("close");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        } else {
            $(".sign-up-modal").removeClass("close").addClass("open");
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
            $("#menu-mobile").removeClass("activated");
            $("#menu-mobile-caller").removeClass("lines-close");
        }
    });
    // 10.1.1. sign up modal additional CLOSER
    $("#menu-mobile-btn, .menu-nav li a").on("click", function() {
        $(".sign-up-modal").removeClass("open").addClass("close");
        $(".introduction").removeClass("introduction-off").addClass("introduction-on");
    });
    // 10.2. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function() {
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open").addClass("close");
        } else {
            $(".contact-modal").removeClass("close").addClass("open");
            $("#menu-mobile").removeClass("activated");
            $("#menu-mobile-caller").removeClass("lines-close");
        }
    });
    // 10.2.1. contact modal additional CLOSER
    $("#menu-mobile-btn, .menu-nav li a").on("click", function() {
        $(".contact-modal").removeClass("open").addClass("close");
    });
	
    // 11. YouTube player
    $("#bgndVideo").YTPlayer();
    // 11.1. highlight YouTube player navigation
    $("a.video-state").on("click", function() {
        $("a.video-state").removeClass("active");
        $(this).addClass("active");
    });
	
    // 12. swiper slider
    // 12.1. swiper thumbnail slider horizontal thumbs
    var swipersliderTop = new Swiper(".swiper-slider-top", {
        direction: "horizontal",
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        autoplay: 4000,
        speed: 1600,
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    var swipersliderBottom = new Swiper(".swiper-slider-bottom", {
        direction: "horizontal",
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 1,
        loop: true,
        slideToClickedSlide: true,
        mousewheelControl: false,
        keyboardControl: false
    });
    swipersliderTop.params.control = swipersliderBottom;
    swipersliderBottom.params.control = swipersliderTop;
	
    // 13. typed text
    $(".typed-title").typed({
        strings: ["Fasty", "Coming Soon Page", "Made for KINGS"],
        typeSpeed: 35,
        backDelay: 4500,
        loop: true
    });


});