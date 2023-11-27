var swiper = new Swiper(".imSwiper", {
    slidesPerView: 5,
    paceBetween: 10,
    autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
    },
    speed: 2000,
    ease: "none",
    // loopAdditionalSlides: 1,

    allowTouchMove: true,
    loop: true,
});
