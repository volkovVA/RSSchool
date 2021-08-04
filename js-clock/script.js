function clock() {
  const needle = document.querySelector('.needle');
  const secondNeedle = document.querySelector('.second');
  const minuteNeedle = document.querySelector('.minute');
  const hourNeedle = document.querySelector('.hour');

  function setClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30)
    const minutesDegrees = ((minutes / 60) * 360) + 0.3;
    const secondsDegrees = ((seconds / 60) * 360) + 0.4;
    seconds == 0 ? needle.style.transition = 'none': needle.style.transition = 'all 0.5s';

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

  }

  setInterval(setClock, 1000);
}

clock();