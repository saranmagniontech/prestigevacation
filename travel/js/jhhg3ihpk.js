$('.pictures-carousal .owl-carousel').owlCarousel({
    items: 4,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    navText: ["<img src='./images/packages/left.png'>", "<img src='./images/packages/right.png'>"],
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
        items: 4
        }
    }
});
$('.trip-carousal .owl-carousel').owlCarousel({
    items: 1,
    dots: true,
    nav: true,
    dotsEach: true,
    mouseDrag: false,
    loop: true,
    navText: ["<img src='./images/common/left_arrw.png'>", "<img src='./images/common/right_arrw.png'>"],
});