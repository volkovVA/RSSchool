const video = document.querySelector('.player__video');
const buttonsPlay = document.querySelectorAll('.play');
const buttonPause = document.querySelector('.pause');
const progress = document.querySelector('.player__progress--rewind');

function playerPlay() {
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
    }
    hiddenIcon();
  });

  document.addEventListener('keydown', (e) => {
    if (e.code == 'Space') {
      togglePlay();
      hiddenIcon();
    }
  })
}

function playerProgress() {
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

function playerVolume() {
  const volume = document.querySelector('.player__progress--volume');
  const speaker = document.querySelector('.player__button--speaker');

  let value = volume.value
  let percent = value * 100;

  volume.style.background = 'linear-gradient(to right, #24809e 0%, #24809e 50%, #c4c4c4 50%, #c4c4c4 100%';

  function handleVolumeUpdate() {
    video.volume = value;
    volume.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${percent}%, #c4c4c4 ${percent}%, #c4c4c4 100%`;
  }

  function volumeMute(param = video.volume > 0) {
    if (param) {
      volume.value = 0;
      video.volume = 0;
      volume.style.background = '#c4c4c4';
      speaker.classList.add('is-active');
    } else {
      volume.value = value;
      handleVolumeUpdate();
      speaker.classList.remove('is-active');
    }
  }

  speaker.addEventListener('click', () => volumeMute())
  volume.addEventListener('change', () => {
    value = volume.value;
    percent = value * 100;
    volumeMute(value == 0);
    handleVolumeUpdate();
  })
  volume.addEventListener('mousemove', handleVolumeUpdate);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'KeyM') {
      volumeMute();
    }
  });
}

function fullScreen() {
  const fullBtn = document.querySelector('.full');
  
  fullBtn.addEventListener('click', () => {
    video.requestFullscreen();
  })

  video.addEventListener('fullscreenchange', () => {
    video.pause();
  })

  document.addEventListener('keydown', (e) => {
    const isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null)
    if (e.code === 'KeyF') {
      !isInFullScreen ? video.requestFullscreen() : document.exitFullscreen();
    }
  });
}

function playbackRate() {
  document.addEventListener('keydown', (e) => {
    const step = 0.25;
    if (e.shiftKey && e.code === 'Comma') {
      if (video.playbackRate !== 0.25) {
        video.playbackRate -= step;
      }
    }
    if (e.shiftKey && e.code === 'Period') {
      if (video.playbackRate !== 2) {
        video.playbackRate += step;
      }
    }
  });
}

function playerSkip() {
  document.addEventListener('keydown', (e) => {
    const skip = 10;
    if (e.code === 'KeyJ') {
      video.currentTime -= skip;
    }
    if (e.code === 'KeyL') {
      video.currentTime += skip;
    }
  });
}

function timeStamp() {
  function stamp(current) {
    video.currentTime = (video.duration * current) / 100;
  }

  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'Digit0' : stamp(0)
        break;
      case 'Digit1' : stamp(10)
        break;
      case 'Digit2' : stamp(20)
        break;
      case 'Digit3' : stamp(30)
        break;
      case 'Digit4' : stamp(40)
        break;
      case 'Digit5' : stamp(50)
        break;
      case 'Digit6' : stamp(60)
        break;
      case 'Digit7' : stamp(70)
        break;
      case 'Digit8' : stamp(80)
        break;
      case 'Digit9' : stamp(90)
        break;
    }
  });
}

function videoSlider() {
  const leftBtn = document.querySelector('.player__slide--prev');
  const rightBtn = document.querySelector('.player__slide--next');
  const sliderItems = document.querySelectorAll('.player__slider-item');
  const load = document.querySelector('.player__download');

  const videoSrc = [
    'louvre1',
    'louvre2',
    'louvre3',
    'louvre4',
    'louvre5',
  ]

  const posterSrc = [
    'poster1',
    'poster2',
    'poster3',
    'poster4',
    'poster5',
  ]
  
  let active = 0;

  function setActiveVideo(active) {
    video.src = `./assets/video/${videoSrc[active]}.mp4`;
    video.poster = `./assets/img/poster/${posterSrc[active]}.png`;
    sliderItems.forEach(item => {
      item.classList.remove('active');
    })
    sliderItems[active].classList.add('active')
    progress.style.background = '#c4c4c4';
    load.href = `./assets/video/louvre${active+1}.mp4`
    load.download = `louvre${active+1}.mp4`
    if (!video.paused) {
      togglePlay();
    }
    hiddenIcon();
  }

  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', () => {
      setActiveVideo(i);
      active = i;
    })
  }

  rightBtn.addEventListener('click', () => {
    active++;
    if (active> videoSrc.length - 1) {
      active = 0;
    }

    setActiveVideo(active);
  });

  leftBtn.addEventListener('click', () => {
    active--;
    if (active < 0) {
      active = videoSrc.length - 1;
    }
    
    setActiveVideo(active);
  });

  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.code === 'KeyP') {
      active++;
      if (active> videoSrc.length - 1) {
        active = 0;
      }

      setActiveVideo(active);
    }

    if (e.shiftKey && e.code === 'KeyN') {
      active--;
      if (active < 0) {
        active = videoSrc.length - 1;
      }
      
      setActiveVideo(active);
    }
  });
}

function hiddenIcon() {
  !video.paused ? buttonPause.hidden = false : buttonPause.hidden = true;
  buttonsPlay.forEach(el => {
    !video.paused ? el.hidden = true : el.hidden = false;
  });
}

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function digitalVideoDuration() {
  const videoDurationCurrent = document.querySelector('.player__duration-current');
  const videoDurationTotal = document.querySelector('.player__duration-total');

  video.addEventListener("durationchange", function() {
    videoDurationTotal.innerText = formatTime(video.duration);
  });

  video.addEventListener("timeupdate", function() {
    videoDurationCurrent.innerText = formatTime(video.currentTime);
  });

  function formatTime(time) {
    const minutes = Math.floor(Math.round(time) / 60);
    const seconds = Math.round(time) % 60;
    return `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

function videoDownload() {
  const load = document.querySelector('.player__download');
}

playerPlay();
playerProgress();
playerVolume();
fullScreen();
playbackRate();
playerSkip();
timeStamp();
videoSlider();
digitalVideoDuration();
videoDownload();