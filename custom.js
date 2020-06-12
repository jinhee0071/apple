$(document).ready(function () {

    //비주얼 영역 슬릭

    $(".slider-box-1 > .slider").slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

    //con1 영역 슬릭

    $('.slider-box-2 > .slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
        nextArrow: "<button type='button' class='slick-next'>Next</button>",
    });

    //con3 영역 슬릭

    $('.slider-box-3>.slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
},
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
}
]
    });

});
