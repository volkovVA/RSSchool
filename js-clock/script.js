function currentTimeDiff() {
  return Math.abs(new Date().getTimezoneOffset() / 60);
}

function currentTimeZone() {
  const timeDiff = currentTimeDiff();
  switch (timeDiff) {
    case 3: return 'moscow';
    case -4: return 'newyork';
    case 1: return 'london';
    case 9: return 'tokyo';
    default: return 'moscow';
  }
}

function clock() {
  const needle = document.querySelector('.needle');
  const secondNeedle = document.querySelectorAll('.second');
  const minuteNeedle = document.querySelectorAll('.minute');
  const hourNeedle = document.querySelectorAll('.hour');
  const dayWindow = document.querySelectorAll('.rect');
  const dateWindow = document.querySelector('.digital-date');
  const timeWindow = document.querySelector('.digital-time');
  const roundSecond = document.querySelectorAll('.round_second span');
  const roundMinute = document.querySelectorAll('.round_minute span');
  const roundHour = document.querySelectorAll('.round_hour span');
  const timeZones = document.querySelector('.time-zones');

  function setClock(timeDifference = currentTimeDiff(), timeZone) {
    const time = new Date();
    const seconds = time.getUTCSeconds();
    const minutes = time.getUTCMinutes();
    const hours = time.getUTCHours() + timeDifference;

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone
    };
  
    const digitalTime = time.toLocaleTimeString('en-GB', {timeZone});
    const digitalDate = time.toLocaleDateString('en-GB', options);
    const digitalDay = time.toLocaleDateString('en-GB', {day: "numeric", timeZone});

    const degreesSecond = ((seconds / 60) * 360);
    const degreesMinute = ((minutes / 60) * 360);
    const degreesHour = ((hours / 12) * 360) + ((minutes/60)*30);

    const circleSecond = document.querySelectorAll('.progress-circle_second');
    const circleMinute = document.querySelectorAll('.progress-circle_minute');
    const circleHour = document.querySelectorAll('.progress-circle_hour');

    const percentSecond = (seconds * 100) / 60;
    const percentMinute = (minutes * 100) / 60;
    let percentHour = (((hours + 24) % 12 || 12) * 100) / 12;
    percentHour === 100 ? percentHour = 0 : percentHour; 

    seconds == 0 ? needle.style.transition = 'none': needle.style.transition = 'all 0.5s';

    dayWindow.forEach(el => el.textContent = digitalDay);
    timeWindow.textContent = digitalTime;
    dateWindow.textContent = digitalDate;

    roundSecond.forEach(el => el.textContent = seconds < 10 ? `0${seconds}` : `${seconds}`);
    roundMinute.forEach(el => el.textContent = minutes < 10 ? `0${minutes}` : `${minutes}`);
    roundHour.forEach(el => el.textContent = hours >= 24 ? `${hours-24}0` : `${hours}`);

    needleRotate(secondNeedle, degreesSecond);
    needleRotate(minuteNeedle, degreesMinute);
    needleRotate(hourNeedle, degreesHour);

    setProgress(percentSecond, circleSecond);
    setProgress(percentMinute, circleMinute);
    setProgress(percentHour, circleHour);
  }

  function needleRotate(list, exp) {
    list.forEach(el => {
      el.style.transform = `translate(-50%, -100%) rotate(${exp}deg)`;
    });
  }

  function setProgress(percent, circle) {
    circle.forEach(el => {
      const radius = el.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - percent / 100 * circumference;
  
      el.style.strokeDasharray = `${circumference} ${circumference}`;
      el.style.strokeDashoffset = circumference;
      el.style.strokeDashoffset = offset;
    });

  }

  function setClockTimeZone() {
    const interval = setInterval(() => {
      setClock();
    }, 1000);
  
    let arr = [interval];
  
    function clearIntervalAll() {
      arr.map((a) => {
        clearInterval(a);
        arr = [];
      })
    }
  
    function setTimeOfCity(difference, timeZone) {
        clearIntervalAll();
        const interval = setInterval(() => {
          setClock(difference, timeZone);
        }, 1000);
        arr.push(interval);
    }

    function addActiveTimeZone(target) {
      const timeZonesButtons = document.querySelectorAll('.time-zone');
      timeZonesButtons.forEach(el => {
        el.classList.add('no-active');
        el.classList.remove('active');
      })
      target.classList.add('active');
      target.classList.remove('no-active');
    }
  
    timeZones.addEventListener('click', e => {
      const target = e.target;
      switch (true) {
        case target.classList.contains('time-zone_moscow'): 
          bgSlider(3, 'moscow');
          setTimeOfCity(3, 'Europe/Moscow');
          addActiveTimeZone(target);
          break;
        case target.classList.contains('time-zone_new-york'):
          bgSlider(-4, 'newyork');
          setTimeOfCity(-4, 'US/Eastern');
          addActiveTimeZone(target);
          break;
        case target.classList.contains('time-zone_london'):
          bgSlider(1, 'london');
          setTimeOfCity(1, 'Europe/London');
          addActiveTimeZone(target);
          break;
        case target.classList.contains('time-zone_tokyo'):
          bgSlider(9, 'tokyo');
          setTimeOfCity(9, 'Asia/Tokyo');
          addActiveTimeZone(target);
          break;
        default: return;
      }
    });
  }

  setClockTimeZone();
}

function changeClock() {
  const clockBtns = document.querySelector('.clock-btns');
  const clock = document.querySelectorAll('.clock');

  clockBtns.addEventListener('click', e => {
    target = e.target.getAttribute('data-name');
    clock.forEach(el => {
      el.style.display = 'none';
      if (el.classList.contains(target)) {
        el.style.display = 'flex';
      }
    });
  });
}

function bgSlider(timeDifference = currentTimeDiff(), timeZoneCity = currentTimeZone()) {
  const slidePrev = document.querySelector('.slider-btn_prev');
  const slideNext = document.querySelector('.slider-btn_next');
  let randomNum = getRandomNum(1,3);

  const sliderBox = document.querySelectorAll('.slider-box');
  const sliderCurrent = document.querySelector('.slider-controls_current');
  const sliderTotal = document.querySelector('.slider-controls_total');
  
  function chooseBox() {
    sliderBox.forEach(el => el.classList.remove('active'));
    sliderBox[randomNum-1].classList.add('active');
    sliderTotal.textContent = sliderBox.length;
    sliderCurrent.textContent = randomNum;
  }

  function getTimeOfDay() {
    const time = new Date();
    let hours = time.getUTCHours() + timeDifference;
    hours >= 24 ? hours = hours - 24 : hours;
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
    img.src = `./img/${timeZoneCity}/${timeDay}/${randomNum}.jpg`;
    img.onload = () => {
      wrapper.style.backgroundImage = `url(${img.src})`;
    }
  }

  function getSlideNext() {
    randomNum += 1;
    if (randomNum > 3) {
      randomNum = 1;
    }
    chooseBox();
    setBg();
  }

  function getSlidePrev() {
    randomNum -= 1;
    if (randomNum < 1) {
      randomNum = 3;
    }
    chooseBox();
    setBg();
  }

  chooseBox();
  setBg();

  slidePrev.onclick = getSlidePrev;
  slideNext.onclick = getSlideNext;
}

function consoleDesc() {
  console.group('Обязательный функционал');
  console.warn('Разобраться в коде предложенного вам для изучения чужого проекта и самостоятельно его воспроизвести');
  console.warn('10 баллов');
  console.groupEnd();

  console.group('Обязательный дополнительный фукционал');
  console.warn('Для каждого проекта указан обязательный дополнительный функционал, который необходимо реализовать. В каждом задании обязательный дополнительный функционал свой, он указан в описании задания');
  console.warn('10 баллов');
  console.info('Дополните приложение электронными часами, которые показывают:');
  console.info('- точное время (часы минуты и секунды);');
  console.info('- полное название дня недели;');
  console.info('- дату (число и название месяца);');
  console.info('- год;');
  console.info('!!! Дополнительный функционал полностью по пунктам реализован на циферблате синих часов! В зависимости от смены часового пояса, меняется время и дата (число, день, месяц, год) цифровых часов !!!');
  console.groupEnd();

  console.group('Дополнительный функционал на выбор');
  console.warn('Дополнительный фукционал на выбор это одно или несколько улучшений, которые вы можете добавить в свой проект. Для каждого проекта предлагаются несколько возможных вариантов его улучшения. Вы можете реализовать одно или несколько из них, или добавить в проект свои собственные улучшения. Каждое качественно выполненное улучшение из предложенных в задании или своё собственное, аналогичное им по сложности, оценивается в 10 баллов');
  console.info('- приложение, которое показывает время в разных точках планеты');
  console.warn('10 баллов');
  console.info('!!! При нажатии на карточку с названием и изображением города на часах меняется точное время, время суток, дата на текущие в данном городе. Фон также изменяется на фотографии данного города и подгружаются изображения в зависимости от времени суток в данное время в городе. По-умолчанию изначально загружаются изображения г.Москва. Если приложение открывается в часовом поясе, который совпадает с часовым поясом города указанного на кнопках, то соответственно по-умолчанию загрузятся изображения данного города !!!');
  console.info('- Добавить круговые диаграммы для часов минут и секунд');
  console.warn('10 баллов');
  console.info('!!! Данный функционал реализован на циферблате зеленых часов. Часы, минуты и секунды отображаются на кругах циферблата, которые также по окружности заполняются серой линией в зависимости от времени !!!');
  console.info('- Возможность переключать тёмную светлую тему');
  console.warn('10 баллов');
  console.info('!!! Данный функционал реализован кнопками выше по краям часов. Можно выбрать модель часов и также их расцветку !!!');
  console.info('- Самостоятельный функционал');
  console.warn('10 баллов');
  console.info('!!! Реализовано задание из проекта "Momentum" - Слайдер изображений');
  console.info('1. Фоновое изображение выбирается рандомно из коллекции изображений при каждой загрузке;');
  console.info('2. Фоновое изображение формируется с учётом времени суток и случайного номера изображения;');
  console.info('3. Изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана;');
  console.info('При изменении часового пояса изображения соответствуют времени суток в данном регионе !!!');
  console.warn('Итого: 60 баллов. Максимальный балл за таск - 30.');
  console.groupEnd();
}

clock();
changeClock();
bgSlider();
// consoleDesc();