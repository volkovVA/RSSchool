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

function changeClock() {
  const toggle = document.querySelector('.toggle');
  const html = document.querySelector('html');

  toggle.addEventListener('click', e => {
    html.classList.contains('silver') ?
      ( html.classList.remove('silver'),
        e.target.textContent = 'Silver / Black clock'
      ) : (
        html.classList.add('silver'),
        e.target.textContent = 'Gold / Blue clock'
      );
  });
}

function slider() {
  const slidePrev = document.querySelector('.prev');
  const slideNext = document.querySelector('.next');
  let randomNum = getRandomNum(1,5);

  function getTimeOfDay() {
    const time = new Date();
    const hours = time.getHours();

    switch(true) {
      case (hours >= 4 && hours < 12)  : return 'morning';
      case (hours >= 12 && hours < 17) : return 'day';
      case (hours >= 17 && hours <= 23) : return 'evening';
      case (hours >= 0 && hours < 4)  : return 'night';
      default: return null;
    }
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function setBg() {
    const img = new Image();
    const wrapper = document.querySelector('.wrapper');
    const timeDay = getTimeOfDay();

    img.src = `./img/${timeDay}/${randomNum}.jpg`;
    img.onload = () => {
      wrapper.style.backgroundImage = `url(${img.src})`;
    }
    
  }

  function getSlideNext() {
    randomNum += 1;
    if (randomNum > 5) {
      randomNum = 1;
    }
    setBg();
  }

  function getSlidePrev() {
    randomNum -= 1;
    if (randomNum < 1) {
      randomNum = 5;
    }
    setBg();
  }

  setBg();
  slidePrev.addEventListener('click', getSlidePrev);
  slideNext.addEventListener('click', getSlideNext);
}

clock();
changeClock();
slider();