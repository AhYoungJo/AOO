$(document).ready(function () {
    const scrollThreshold = 300;

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > scrollThreshold) {
            $(".r-s-intro").css({
                opacity: "1",
                transition: "all 1s ease-out",
            });
        } else {
            $(".r-s-intro").css({
                opacity: "0",
                transition: "all 0.5s ease-out",
            });
        }
    });
});

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

$(document).ready(function () {
    const scrollThreshold = 1000;
    console.log(scrollThreshold);

    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        if (scrollPosition > scrollThreshold) {
            $(".showCampagin-section").addClass("visible");
        } else {
            $(".showCampagin-section").removeClass("visible");
        }
    });
});
