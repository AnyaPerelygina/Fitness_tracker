import Swiper from '../vendor/swiper';

const sliderAbout = document.querySelector('.about__swiper');
let mySwiper;

const createAboutSlider = () => {
  if (sliderAbout && innerWidth > 1199) {
    mySwiper = new Swiper(sliderAbout, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      allowTouchMove: true,
      init: true,
      pagination: {
        el: '.about__pagination',
        type: 'bullets',
        centeredSlides: true,
        slidesPerView: 1,
        clickable: true,
      },
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
    });
  }
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
