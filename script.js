window.addEventListener("load", startUp);
window.addEventListener("load", activateBurgerMenu);

function startUp() {
  const color = document.querySelector("#color");

  function changeColor() {
    const html = document.querySelector('html');
    html.style.setProperty("--box-color", color.value);
  }

  color.addEventListener("input", changeColor);
  color.addEventListener("change", changeColor);
  color.select();
}

function activateBurgerMenu() {
  const burgerBtn = document.querySelector('.nav__icon');
  const nav = document.querySelector('.nav');
  const navItem = document.querySelectorAll('.nav__item');

  const removeActive = () => {
    nav.classList.remove('active');
    document.body.style.overflow = '';
  };

  const addActive = () => {
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  burgerBtn.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      removeActive();
    } else {
      addActive();
    }
  });

  navItem.forEach((item) => {
    item.addEventListener('click', () => {
      removeActive();
    });
  });
}