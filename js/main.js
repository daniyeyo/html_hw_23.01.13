$(function () {

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        trueauopSpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1200,
    });


    $('.slide').slick({
        slidesToShow: 3,
    });

    $('#slideTab .menu>li').on('click', function () {
        var idx = $(this).index();
        $('#slideTab .con>div').removeClass('on');
        $('#slideTab .con>div').eq(idx).addClass('on');

        $('#slideTab .menu>li').removeClass('on');
        $(this).addClass('on');
    })


})