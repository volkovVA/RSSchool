export function setRipple() {
  const button = document.querySelector('.form__button');


  button.addEventListener('click', function (e) {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside - 140 + 'px';
    circle.style.left = xInside - 910 + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
}