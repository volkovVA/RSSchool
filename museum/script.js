import {
  playerProgress
} from './js/player/progress.js';

import {
  slide
} from './js/slider/slider.js';

import {
  setGallery
} from './js/gallery/gallery.js';

import {
  selectOptions
} from './js/form/select.js';

import {
  showForm
} from './js/form/modal.js';

playerProgress();

let sliderItems = document.querySelector('.slider__box'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

slide(sliderItems, prev, next);

setGallery();

selectOptions();

showForm();