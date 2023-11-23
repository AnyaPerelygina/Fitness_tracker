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
};

const destroySwiperIfNeeded = () => {
  if (window.innerWidth <= 1200 && mySwiper) {
    mySwiper.destroy();
    document.querySelector('.about__swiper').style.display = 'block';
  } else if (mySwiper && !mySwiper.initialized) {
    createAboutSlider();
  }
};

const handleResize = () => {
  destroySwiperIfNeeded();
};

window.addEventListener('resize', handleResize);

export {createAboutSlider, handleResize};
