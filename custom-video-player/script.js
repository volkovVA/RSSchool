function playerProgress() {
  const playerControl = document.querySelector(".player__control");

  playerControl.addEventListener("input", e => {
    const target = e.target
    if (target.classList.contains('player__progress')) {
      const value = target.value;
      target.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
    }
  });
}

const player = document.querySelector('.player');
const video = document.querySelector('.player__video');

function playerPlay() {
  const buttonsPlay = document.querySelectorAll('.play');
  const buttonPause = document.querySelector('.pause');

  buttonPause.addEventListener('click', () => {
    togglePlay();
    hiddenIcon();
  });
  buttonsPlay.forEach(el => {
    el.addEventListener('click', () => {
      togglePlay();
      hiddenIcon();
    });
  });
  video.addEventListener('click', () => {
    if (!video.paused) {
      togglePlay();
      hiddenIcon();
    }
  });

  function togglePlay() {
    video.paused ? video.play() : video.pause();
  }

  function hiddenIcon() {
    !video.paused ? buttonPause.hidden = false : buttonPause.hidden = true;
    buttonsPlay.forEach(el => {
      !video.paused ? el.hidden = true : el.hidden = false;
    });
  }
}

playerPlay();
playerProgress();