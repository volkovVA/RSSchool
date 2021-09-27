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

import {
  setRipple
} from './js/form/ripple.js';

import {
  setInputNumber
} from './js/form/input.js';

import {
  initComparisons
} from './js/explore/comparison.js';

import {
  consoleDescription
} from './js/console/console.js';

playerProgress();

let sliderItems = document.querySelector('.slider__box'),
  prev = document.getElementById('prev'),
  next = document.getElementById('next');

slide(sliderItems, prev, next);

setGallery();

selectOptions();

showForm();

initComparisons();

setRipple();

setInputNumber();

consoleDescription();