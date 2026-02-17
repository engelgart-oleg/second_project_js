"use strict";

function processString(input) {
  // Проверка на "Отмену"
  if (input === null) {
    return "Вы отменили действие.";
  }

  // Проверка: на ввод пробелов или пустую строку
  if (input.trim() === "") {
    return "Ошибка: Вы ничего не ввели!";
  }

  // Проверка, не является ли ввод числом
  if (!isNaN(input) && input.trim() !== "") {
    return "Ошибка: Цифры вводить нельзя!";
  }

  let result = input.trim();

  if (result.length > 30) {
    result = result.substring(0, 30) + "...";
  }

  return result;
}

const userInput = prompt("Введите текст:");
console.log(processString(userInput));
