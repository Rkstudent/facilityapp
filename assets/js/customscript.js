$('.carousle-banner').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    items: 1,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.carousel-services').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },

    }
})
$('.carousel-clients').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 6
        },

    }
})