const namingKeys = {
  letter: ['D', 'F', 'G', 'H', 'J', 'K', 'L'],
  note: ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  sharpLetter: ['R', 'T', '', 'U', 'I', 'O'],
  sharpNote: ['c♯', 'd♯', '', 'f♯', 'g♯', 'a♯']
};

window.onload = function() {

  // Generate Piano Keys
  createdPianoKeys(namingKeys);
}

const createdPianoKeys = (data) => {

  const piano = document.querySelector('.piano');
  const sharp = document.createElement('div');
  sharp.className = 'keys-sharp';
  let html = '';
  let htmlSharp = '';

  for (let i = 0; i < data.letter.length; i++) {
    html += `<div class='piano-key low' data-letter='${data.letter[i]}' data-note='${data.note[i]}'></div>`;
  }
  for (let i = 0; i < data.sharpLetter.length; i++) {
    if (data.sharpLetter[i] === '') {
      htmlSharp += `<div class='piano-key sharp none'></div>`;
    } else {
      htmlSharp += `<div class='piano-key sharp' data-letter='${data.sharpLetter[i]}' data-note='${data.sharpNote[i]}'></div>`;
    }
  }

  piano.insertAdjacentHTML('beforeend', html);
  piano.insertAdjacentElement('beforeend', sharp);
  sharp.insertAdjacentHTML('beforeend', htmlSharp);

}