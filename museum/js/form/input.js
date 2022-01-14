export function setInputNumber() {
  const input = document.querySelector('.form__card_month input');
  const up = document.querySelector('.form__card_up');
  const down = document.querySelector('.form__card_down');

  let count = 1;

  up.addEventListener('click', () => {
    input.value = count < 10 ? `0${count}` : count;
    count++;
    if (count > 12) {
      count = 12;
    }

  });

  down.addEventListener('click', () => {
    input.value = count < 10 ? `0${count}` : count;
    count--;
    if (count < 1) {
      count = 1;
    }
  });
}