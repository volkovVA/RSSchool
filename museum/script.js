import {
  playerProgress
} from './js/player/progress.js';

import {
  slide
} from './js/slider/slider.js';

playerProgress();

let sliderItems = document.querySelector('.slider__box'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

slide(sliderItems, prev, next);