"use strict";



// 1. Решение через if
let lang = 'ru';

if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}



// 2. Решение через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}


const weekDays = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

// Выводим данные, обращаясь к ключу lang
console.log(weekDays[lang] ? weekDays[lang].join(', ') : 'Язык не найден');

















/*

let namePerson = "Игорь";
let role = (namePerson === "Артем") ? "Директор" :
            (namePerson === "Александр") ? "Преподователь" :
              "Студент";

console.log(role);

*/