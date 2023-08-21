import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default new Swiper('.swiper', {
  direction: 'horizontal',
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 5,
      spaceBetween: 38,
    }, 
    750: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    }, 
    1000: {
      spaceBetween: 42,
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  }
});
