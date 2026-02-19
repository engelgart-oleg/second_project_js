"use strict";

const week = [
  "Понедельник", 
  "Вторник", 
  "Среда", 
  "Четверг", 
  "Пятница", 
  "Суббота", 
  "Воскресенье"
];

let todayIndex = new Date().getDay();

todayIndex = (todayIndex === 0) ? 6 : todayIndex - 1;

week.forEach((day, index) => {
  let style = "";

  if (index === 5 || index === 6) {
    style += "font-style: italic; ";
  }

  if (index === todayIndex) {
    style += "font-weight: bold; ";
  }

  console.log(`%c${day}`, style);
});