const video = document.querySelector('.player__video');
const buttonsPlay = document.querySelectorAll('.player__button--play');
const buttonPause = document.querySelector('.player__button--pause');
const progress = document.querySelector('.player__progress--range');

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

  if (!video.paused) {
    control.style.display = 'none';
  }
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
  const fullBtn = document.querySelector('.player__button--full');
  
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
  const load = document.querySelector('.player__button--download');

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
  const videoDurationCurrent = document.querySelector('.player__time-elapsed');
  const videoDurationTotal = document.querySelector('.player__time-duration');

  video.addEventListener("durationchange", function() {
    videoDurationTotal.innerText = formatTime(video.duration);
  });

  video.addEventListener("timeupdate", function() {
    videoDurationCurrent.innerText = formatTime(video.currentTime);
  });

  function formatTime(time) {
    const minutes = Math.floor(Math.round(time) / 60);
    const seconds = Math.round(time) % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}

function modalWindow() {
  const overlay = document.querySelector('.overlay');
  const close = document.querySelector('.modal__close');

  document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.code === 'Slash') {
      overlay.classList.toggle('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      overlay.classList.remove('active');
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target == overlay || e.target == close) {
      overlay.classList.remove('active');
    }
  })
}

function consoleDesc() {
  console.group('Первый этап. Обязательный функционал');
  console.warn('Разобраться в коде предложенного вам для изучения чужого проекта и самостоятельно его воспроизвести');
  console.warn('10 баллов');
  console.groupEnd();

  console.group('Второй этап. Обязательный дополнительный фукционал');
  console.warn('Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания');
  console.warn('10 баллов');
  console.info('Управление плеером с клавиатуры:\n 1. Клавиша Пробел — пауза\n 2. Клавиша M (англ) — отключение/включение звука\n 3. Клавиша > — ускорение воспроизведения ролика\n 4. Клавиша < — замедление воспроизведения ролика\n 5. Клавиша f — включение/выключение полноэкранного режим');
  console.groupEnd();

  console.group('Третий этап. Дополнительный функционал на выбор');
  console.warn('Дополнительный фукционал на выбор это одно или несколько улучшений, которые вы можете добавить в свой проект. Для каждого проекта предлагаются несколько возможных вариантов его улучшения. Вы можете реализовать одно или несколько из них, или добавить в проект свои собственные улучшения. Каждое качественно выполненное улучшение из предложенных в задании или своё собственное, аналогичное им по сложности, оценивается в 10 баллов');
  console.warn('25 баллов');
  console.info('Добавить поддержку других горячих клавиш из тех, которые поддерживаются в YouTube видео - 2 балла за каждую дополнительную горячую клавишу:\n 1. Клавиша j - перемотать ролик на 10 секунд назад. 2 балла\n 2. Клавиша l - перемотать ролик на 10 секунд вперёд. 2 балла\n 3. Клавиша P (Shift + p) - перейти к предыдущему видео. 2 балла\n 4. Клавиша N (Shift + n) - перейти к следующему видео. 2 балла\n 4. Клавиши 0..9 - перейти к определенному моменту видео. 2 балла\n 5. Клавиша Shift + / - список всех горячих клавиш. 5 баллов\n Итого: 15 баллов')
  console.info('Добавить возможность перелистывания видео или слайдер видео. 10 баллов')
  console.warn('Итого: 45 баллов. Максимальный балл за таск - 30.');
  console.groupEnd();
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
modalWindow();
consoleDesc();