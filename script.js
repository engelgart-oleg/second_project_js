// переменная num со значением 266219
let num = 266219;

// Вывод в консоль произведение цифр
let str = String(num);
let result = 1;

for (let i = 0; i < str.length; i++) {
result *= +str[i];
}
console.log("Произведение цифр:", result);

// Возведение в степень 3 (используя 1 оператор)
let powered = result ** 3;
console.log('Результат в степени 3:', powered); // 1296^3 = 2176782336

// Вывод в консоль первые 2 цифры
let finalStr = String(powered);
console.log('Первые 2 цифры:', finalStr[0] + finalStr[1]); // 21