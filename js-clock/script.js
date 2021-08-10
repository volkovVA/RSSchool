function clock() {
  const needle = document.querySelector('.needle');
  const secondNeedle = document.querySelectorAll('.second');
  const minuteNeedle = document.querySelectorAll('.minute');
  const hourNeedle = document.querySelectorAll('.hour');
  const dayWindow = document.querySelector('.rect');
  const dateWindow = document.querySelector('.digital-date');
  const timeWindow = document.querySelector('.digital-time');
  const roundSecond = document.querySelector('.round-second span');
  const roundMinute = document.querySelector('.round-minute span');
  const roundHour = document.querySelector('.round-hour span');

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

    const digitalTime = time.toLocaleTimeString('en-US');

    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30)
    const minutesDegrees = ((minutes / 60) * 360) + 0.3;
    const secondsDegrees = ((seconds / 60) * 360) + 0.4;

    const circleSecond = document.querySelector('.progress-circle_second');
    const circleMinute = document.querySelector('.progress-circle_minute');
    const circleHour = document.querySelector('.progress-circle_hour');

    const secondPercent = (seconds * 100) / 60;
    const minutePercent = (minutes * 100) / 60;
    const hourPercent = (((hours + 24) % 12 || 12) * 100) / 12;

    seconds == 0 ? needle.style.transition = 'none': needle.style.transition = 'all 0.5s';

    dayWindow.innerHTML = `${date}`;
    timeWindow.innerHTML = digitalTime;
    dateWindow.innerHTML = `${days[day]} | ${months[month]} | ${year}`;
    roundSecond.textContent = `${seconds}`;
    roundMinute.textContent = `${minutes}`;
    roundHour.textContent = `${hours}`;

    styleTransform(hourNeedle, hoursDegrees);
    styleTransform(minuteNeedle, minutesDegrees);
    styleTransform(secondNeedle, secondsDegrees);

    setProgress(secondPercent, circleSecond);
    setProgress(minutePercent, circleMinute);
    setProgress(hourPercent, circleHour);
  }

  function styleTransform(list, exp) {
    list.forEach(el => {
      el.style.transform = `translate(-50%, -100%) rotate(${exp}deg)`;
    })
  }

  function setProgress(percent, circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - percent / 100 * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    circle.style.strokeDashoffset = offset;
  }

  setInterval(setClock, 1000);
}

function changeColorClock() {
  const toggleOne = document.querySelector('.toggle-one');
  const toggleTwo = document.querySelector('.toggle-two');
  const clockOne = document.querySelector('.clock-one');
  const clockTwo = document.querySelector('.clock-two');

  toggleOne.addEventListener('click', e => {
    change(e, clockOne, 'silver', 'Silver / Black clock', 'Gold / Blue clock', '#000000', '#898989', '#000074', '#af9c55')
  });

  toggleTwo.addEventListener('click', e => {
    change(e, clockTwo, 'green', 'Green / Silver clock', 'Silver / Green clock', '#c0c0c0', '#00532c', '#c0c0c0', '#00532c')
  });

  function change(e, clockNumber, className, contentOne, contentTwo, colorOne, colorTwo, colorThree, colorFour) {
    clockNumber.classList.contains(className) ?
      ( clockNumber.classList.remove(className),
        e.target.textContent = contentOne,
        e.target.style.background = `linear-gradient(0deg, ${colorOne} 0%, ${colorTwo} 100%)`
      ) : (
        clockNumber.classList.add(className),
        e.target.textContent = contentTwo,
        e.target.style.background = `linear-gradient(0deg, ${colorThree} 0, ${colorFour} 100%)`
      );
  }
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

function changeClock() {
  const checkClockOne = document.querySelector('.change-clock_one');
  const checkClockTwo = document.querySelector('.change-clock_two');
  const clockOne = document.querySelector('.clock-one');
  const clockTwo = document.querySelector('.clock-two');
  checkClockOne.addEventListener('click', () => {
    clockOne.style.display = 'flex';
    clockTwo.style.display = 'none';
  })
  checkClockTwo.addEventListener('click', () => {
    clockOne.style.display = 'none';
    clockTwo.style.display = 'flex';
  })
}

clock();
changeClock();
changeColorClock();
slider();