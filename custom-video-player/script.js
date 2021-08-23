function playerPlay() {
  const video = document.querySelector('.player__video');
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

function playerProgress() {
  const video = document.querySelector('.player__video');
  const progress = document.querySelector('.player__progress--rewind');

  progress.style.background = 'linear-gradient(to right, #24809e 0%, #24809e 0%, #c4c4c4 0%, #c4c4c4 100%';
  
  function handleProgressUpdate() {
    const percent = Math.floor((100 / video.duration) * video.currentTime);
    progress.value = percent;
    progress.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${percent}%, #c4c4c4 ${percent}%, #c4c4c4 100%`;
  }
 
  function scrubProgress(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  video.addEventListener('timeupdate', handleProgressUpdate);
  progress.addEventListener('click', scrubProgress);
}

playerPlay();
playerProgress();