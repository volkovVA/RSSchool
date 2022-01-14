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


function consoleDesc() {

  console.info('вёрстка валидная +10');
  console.info('вёрстка семантическая +20');
  console.info('для оформления СV используются css-стили +10');
  console.info('контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10');
  console.info('вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10');
  console.info('есть адаптивное бургер-меню +10');
  console.info('на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10');
  console.info('контакты для связи и перечень навыков оформлены в виде списка ul > li +10');
  console.info('CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10');
  console.info('CV содержит пример вашего кода +10');
  console.info('CV содержит изображения-ссылки на выполненные вами проекты +10');
  console.info('CV выполнено на английском языке +10');
  console.info('выполнены требования к Pull Request +10');
  console.info('дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10');
  console.warn('есть видеорезюме автора CV на английском языке -10');
  console.warn('Итого: 150 баллов');
}

consoleDesc();