const namingKeys = {
  letter: ['D','F','G','H','J','K','L'],
  note: ['c','d','e','f','g','a','b'],
  sharpLetter: ['R','T','','U','I','O'],
  sharpNote: ['c♯','d♯','','f♯','g♯','a♯']
}

const audioData = {
  letter: ['D','F','G','H','J','K','L','R','T','U','I','O'],
  src: ['c','d','e','f','g','a','b','c♯','d♯','f♯','g','a♯']
}

window.onload = function() {

  createdPianoKeys(namingKeys);
  createdAudioTags(audioData);
  playPressKey();
  playClickMouse();
}

// Generate Piano Keys

const createdPianoKeys = (data) => {

  const piano = document.querySelector('.piano');
  const sharp = document.createElement('div');
  sharp.className = 'keys-sharp';
  let html = '';
  let htmlSharp = '';

  for (let i = 0; i < data.letter.length; i++) {
    html += `<div class='piano-key low' data-letter='${data.letter[i]}' data-note='${data.note[i]}' data-key='Key${data.letter[i]}'></div>`;
  }
  for (let i = 0; i < data.sharpLetter.length; i++) {
    if (data.sharpLetter[i] === '') {
      htmlSharp += `<div class='piano-key sharp none'></div>`;
    } else {
      htmlSharp += `<div class='piano-key sharp' data-letter='${data.sharpLetter[i]}' data-note='${data.sharpNote[i]}' data-key='Key${data.sharpLetter[i]}'></div>`;
    }
  }

  piano.insertAdjacentHTML('beforeend', html);
  piano.insertAdjacentElement('beforeend', sharp);
  sharp.insertAdjacentHTML('beforeend', htmlSharp);

}

// Generate Audio Tags

const createdAudioTags = (data) => {

  const main = document.querySelector('.main');
  const audioBox = document.createElement('div');
  audioBox.className = 'audio';
  let html = '';

  for (let i = 0; i < data.letter.length; i++) {
    html += `<audio class="audio-types" src='assets/audio/${data.src[i]}.mp3' data-letter='${data.letter[i]}' data-key='Key${data.letter[i]}'></audio>`;
  }

  main.insertAdjacentElement('beforeend', audioBox);
  audioBox.insertAdjacentHTML('beforeend', html);
}

// Play when the key is pressed

const playPressKey = () => {
  let isKeyDown = false;

  const pressKeyDown = event => {
    const audio = document.querySelector(`audio[data-key='${event.code}']`);
    const key = document.querySelector(`.piano-key[data-key='${event.code}']`);

    if (!isKeyDown) {
      isKeyDown = true;
      if (!audio) return
      audio.currentTime = 0;
      audio.play();
      key.classList.add('play');
    }
  }

  const pressKeyUp = event => {
    isKeyDown = false;
    const key = document.querySelector(`.piano-key[data-key='${event.code}']`);

    key.classList.remove('play');
  }

  window.addEventListener('keydown', pressKeyDown);
  window.addEventListener('keyup', pressKeyUp);
}

// Play when click mouse

const playClickMouse = () => {
  const piano = document.querySelector('.piano');
  let isMouseDown = false;

  const audioPlay = (event) => {
    const audio = document.querySelector(`audio[data-key='${event.target.dataset.key}']`);
    const key = event.target;
    if (!audio) return
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
  }

  const removePlay = (event) => {
    const key = event.target;
    if (key.classList.contains = 'play') {
      key.classList.remove('play');
    }
  }

  piano.addEventListener('mousedown', (event) => {
    if (!isMouseDown) {
      isMouseDown = true;
      audioPlay(event);
    }
  })

  piano.addEventListener('mouseover', event => {
    if (isMouseDown) {
      audioPlay(event);
    }
  })

  piano.addEventListener('mouseup', event => {
    isMouseDown = false;
    removePlay(event);
  })

  piano.addEventListener('mouseout', event => {
    removePlay(event);
  })

}