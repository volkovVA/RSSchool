export function initComparisons() {
  let x, i;
  let slider, img, clicked = 0,
    w, h;

  x = document.getElementsByClassName('explore__img_overlay');
  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    w = img.offsetWidth;
    h = img.offsetHeight;
    img.style.width = (w / 2) + 80 + 'px';
    slider = document.createElement('DIV');
    slider.setAttribute('class', 'explore__slider');
    img.parentElement.insertBefore(slider, img);
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 80 + 'px';
    slider.addEventListener('mousedown', slideReady);
    window.addEventListener('mouseup', slideFinish);
    slider.addEventListener('touchstart', slideReady);
    window.addEventListener('touchstop', slideFinish);

    function slideReady(e) {
      e.preventDefault();
      clicked = 1;
      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }

    function slideFinish() {
      clicked = 0;
    }

    function slideMove(e) {
      let pos;
      if (clicked == 0) return false;
      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }

    function getCursorPos(e) {
      let a, x = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      x = x - window.pageXOffset;
      return x;
    }

    function slide(x) {
      img.style.width = x + 'px';
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + 'px';
    }
  }
}