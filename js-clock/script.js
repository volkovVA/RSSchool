function clock() {
  const needle = document.querySelector('.needle');
  const secondNeedle = document.querySelector('.second');
  const minuteNeedle = document.querySelector('.minute');
  const hourNeedle = document.querySelector('.hour');
  const dayWindow = document.querySelector('.rect');
  const dateWindow = document.querySelector('.digital-date');
  const timeWindow = document.querySelector('.digital-time');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function setClock() {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30)
    const minutesDegrees = ((minutes / 60) * 360) + 0.3;
    const secondsDegrees = ((seconds / 60) * 360) + 0.4;
    const digitalTime = time.toLocaleTimeString('en-US');
    seconds == 0 ? needle.style.transition = 'none': needle.style.transition = 'all 0.5s';

    hourNeedle.style.transform = `translate(-50%, -100%) rotate(${hoursDegrees}deg)`;
    minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${minutesDegrees}deg)`;
    secondNeedle.style.transform = `translate(-50%, -100%) rotate(${secondsDegrees}deg)`;

    dayWindow.innerHTML = `${date}`;
    timeWindow.innerHTML = digitalTime;
    dateWindow.innerHTML = `${days[day]} | ${months[month]} | ${year}`;
  }

  setInterval(setClock, 1000);
}

clock();