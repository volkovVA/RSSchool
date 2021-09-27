export function setGallery() {
  const galleryBox = document.querySelectorAll('.gallery__box');
  const galleryUrl = ['gallery1', 'gallery2', 'gallery3', 'gallery4', 'gallery5', 'gallery6', 'gallery7', 'gallery8', 'gallery9', 'gallery10', 'gallery11', 'gallery12', 'gallery13', 'gallery14', 'gallery15'];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(galleryUrl);

  galleryBox.forEach((box, idx) => {
    box.innerHTML = `<img class="gallery-img" src="assets/img/gallery/${galleryUrl[idx]}.jpg" alt="gallery image">`;
  });
}