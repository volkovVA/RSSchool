export function consoleDescription() {
  console.group('Вёрстка валидная +10');
  console.info('- точное время (часы минуты и секунды);');
  console.groupEnd();

  console.group('Вёрстка семантическая +24');
  console.info('- <header>, <main>, <footer> +2');
  console.info('- семь элементов <section> (по количеству секций) +2');
  console.info('- только один заголовок <h1> +2');
  console.info('- семь заголовков <h2> (по количеству секций) +2');
  console.info('- шесть заголовков <h3> (по количеству карточек) +2');
  console.info('- два элемента <nav> (основная и вспомогательная панель навигации) +2');
  console.info('- три списка ul > li > a (основная и вспомогательная панель навигации, ссылки на соцсети) +2');
  console.info('- тринадцать кнопок button (четыре из них в секции Video, пять в секции Tickets, по две - стрелки слайдера и плейлиста) +2');
  console.info('- три тега input type="radio" (в секции Tickets) +2');
  console.info('- два тега input type="number"(в секции Tickets) +2');
  console.info('- два тега input type="range" (громкось и прогрес-бар видео) +2');
  console.info('- для всех элементов <img> указан обязательный атрибут alt +2');
  console.groupEnd();

  console.group('Вёрстка соответствует макету +45');
  console.info('- блок <header> +5');
  console.info('- секция Welcome +5');
  console.info('- секция Visiting +5');
  console.info('- секция Explore +5');
  console.info('- секция Video +5');
  console.info('- секция Gallery +5');
  console.info('- секция Tickets +5');
  console.info('- секция Contacts +5');
  console.info('- блок <footer> +5');
  console.groupEnd();

  console.group('Форма покупки билетов +22');
  console.info('- форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии +2');
  console.info('- форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay +2');
  console.info('- при вёрстке формы используются следующие элементы: form, input type="date", input type="time", input type="text", input type="email", input type="tel", input type="number", select +8');
  console.info('- вёрстка формы соответствует макету + 10');
  console.groupEnd();

  console.group('Требования к css + 18');
  console.info('- добавлен favicon +2');
  console.info('- для построения сетки используются флексы или гриды +2');
  console.info('- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2');
  console.info('- фоновый цвет каждого блока и секции тянется на всю ширину страницы +2');
  console.info('- иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2');
  console.info('- расстояние между буквами, там, где это требуется по макету, регулируется css-свойством letter-spacing +2');
  console.info('- переключаются радиокнопки в блоке Tickets, одновременно может быть выбрана только одна кнопка +2');
  console.info('- в блоке Contacts правильно указанны ссылки на почту mailto и на телефон tel +2');
  console.info('- в футере добавлены ссылки на соцсети. Круглая граница вокруг иконок соцсетей выполнена при помощи css +2');
  console.groupEnd();

  console.group('Интерактивность, реализуемая через css +25');
  console.info('- плавная прокрутка по якорям +5');
  console.info('- параллакс +5');
  console.info('- при кликам по кнопке Discover the Louvre и карточкам секции Visiting открываются полноэкранные панорамы Google Street View встроенные в страницы вашего сайта при помощи iframe +5');
  console.info('- изменение стиля интерактивных элементов при наведении и клике +10');
  console.groupEnd();

  console.group('Интерактивность, реализуемая через js +16');
  console.info('- можно передвигать ползунки громкости и прогресс-бар видео, при этом цвет шкалы до и после ползунка отличается и соответствует макету +2');
  console.info('- кликами по кнопкам + и - в секции Tiskets можно менять количество билетов Basic и Senior от 0 до 20 +2');
  console.info('- кнопке "Book" в форме покупки билетов добавлен ripple-эффект +2');
  console.info('- при перезагрузке (обновлении) страницы картины в блоке Galery отображаются в рандомном порядке + 10');
  console.groupEnd();

  console.warn('Итого: 160 баллов. Максимальный балл за таск - 150');
}