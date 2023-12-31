import Swiper from "swiper";

let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
