// @ts-nocheck
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const el = document.querySelector('.news-slider');
const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap'));
console.log(gap);

const swiper = new Swiper(el, {
  slidesPerView: 1,
  loop: true,
  spaceBetween: gap,
  navigation: {
    prevEl: '.news-btn--prev',
    nextEl: '.news-btn--next'
  },
  breakpoints: {
    577: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 3,
    }
  }
});
