"use strict";

function updateDateTime() {
  const now = new Date();

  // Формат 
  const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  // Функция склонения существительных
  function getDeclension(number, forms) {
      const mod10 = number % 10;
      const mod100 = number % 100;

      if (mod100 >= 11 && mod100 <= 19) return forms[2];
      if (mod10 === 1) return forms[0];
      if (mod10 >= 2 && mod10 <= 4) return forms[1];
      return forms[2];
  }

  const hourWord = getDeclension(now.getHours(), ['час', 'часа', 'часов']);
  const minuteWord = getDeclension(now.getMinutes(), ['минута', 'минуты', 'минут']);
  const secondWord = getDeclension(now.getSeconds(), ['секунда', 'секунды', 'секунд']);

  const formatA = `Сегодня ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ` +
                  `${now.getFullYear()} года, ${now.getHours()} ${hourWord} ` +
                  `${now.getMinutes()} ${minuteWord} ${now.getSeconds()} ${secondWord}`;

  // Функция добавления ведущего нуля
  const leadZero = (num) => num < 10 ? '0' + num : num;

  const day = leadZero(now.getDate());
  const month = leadZero(now.getMonth() + 1);
  const year = now.getFullYear();
  const hours = leadZero(now.getHours());
  const minutes = leadZero(now.getMinutes());
  const seconds = leadZero(now.getSeconds());

  const formatB = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;

  // Вывод на страницу  
  document.getElementById('date-long').innerText = formatA;
  document.getElementById('date-short').innerText = formatB;

  console.clear(); // Очистка консоли 
  // console.log("Формат А: " + formatA);
  // console.log("Формат Б: " + formatB);
}

setInterval(updateDateTime, 1000);

updateDateTime();