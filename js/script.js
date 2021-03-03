$(function ($) {

    //Preloader
    $(window).on('load', function () {
        $(".preloader_main").delay(1000).fadeOut(1000);
    });

    //back to top button
    $(window).scroll(function () {
        var scrollp = $(window).scrollTop();

        if (scrollp > 200) {
            $(".top").fadeIn(1000);
        } else {
            $(".top").fadeOut(1000);
        }

    });

    $(".top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });

    //scrollspy menu
    $('body').scrollspy({
        target: '.customnav',
        offset: 80
    });

    //menu js
    var scrltop = $(".customnav").offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();

        if (scroll >= scrltop) {
            $(".customnav").addClass("fixtop");
        } else {
            $(".customnav").removeClass("fixtop");
        }

    });

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    //header slider js
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow',
        speed: 1000,
        fade: true
    });

    // wow js 
    new WOW().init();

    //counter js
    $('.counter').counterUp({
        time: 3000
    });

    // filterizr js
    var filterizd = $('.filtr-container').filterizr();

    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

    //light box js
    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: '#37A000',
        closeBackground: '#37A000',
        arrowsColor: '#37A000',
    });

    //progress-bar tooltip
    jQuery(document).ready(function () {
        jQuery('.skillbar').each(function () {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 3000);
        });
    });

    //team part js
    $('.team_text_active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.team_img_active'
    });

    $('.team_img_active').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.team_text_active',
        centerPadding: '0',
        dots: false,
        arrows: false,
        centerMode: true,
        autoPlay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    // feedback part js
    $('.comments_text_all').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
    });

    //blog slider
    $('.blog_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
          ]
    });

    // client text
    $('.client_logo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
          ]
    });

    //google map
    var googleMapSelector = $('#map'),
        myCenter = new google.maps.LatLng(23.734337, 90.392739);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 17,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            animation: google.maps.Animation.BOUNCE,
            icon: 'images/map_icon.png'
        });
        marker.setMap(map);
    }
    if (googleMapSelector.length) {
        google.maps.event.addDomListener(window, 'load', initialize);
    }



});
