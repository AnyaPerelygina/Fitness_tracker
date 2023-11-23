import Swiper from '../vendor/swiper';

const sliderAbout = document.querySelector('.about__swiper');
const buttonNext = document.querySelector('.about__button-next');
const buttonPrev = document.querySelector('.about__button-prev');
let mySwiper;

const createAboutSlider = () => {
  mySwiper = new Swiper(sliderAbout, {
    loop: true,
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 30,
    init: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        allowTouchMove: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return mySwiper;
};

export {createAboutSlider};
