$('.homeslide-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    navText: ["<img src='./images/home/top_arrw.png'>", "<img src='./images/home/down_arrw.png'>"],
});
$('.homemobile-carousal .owl-carousel').owlCarousel({
    items: 2,
    dots: false,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    responsive: {
        0:{
        items: 2
        },
        480:{
        items: 2
        },
        768:{
        items: 3
        },
    }
});
$('.city-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    navText: ["<img src='./images/common/left_arrw.png'>", "<img src='./images/common/right_arrw.png'>"],
});
$('.review-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    navText: ["<img src='./images/common/left_arrw.png'>", "<img src='./images/common/right_arrw.png'>"],
    responsive: {
        0:{
        items: 1
        },
        576:{
        items: 2
        },
        768:{
        items: 2
        },
        992:{
        items: 3
        },
        1200:{
        items: 1
        },
    }
});