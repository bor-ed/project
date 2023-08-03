'use strict';

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);



let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*"
    }
    result += '\n';
}

console.log(result);

function firstTask() {
    for (let i = 5; i < 11; i++) {

        console.log(i);
    }
}

for (let i = 20; i >= 10; i--) {
    if (i === 13) break;

    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++
}
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arrayOfNumbers = [];

for (let i = 5; i < 10; i++) {
    arrayOfNumbers[i - 5] = 1;
}
console.log(arrayOfNumbers);
return arrayOfNumbers;


let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}
console.log(result);

for (let i = 5; i < 11; i++) {
    console.log(i);
}

for (let i = 20; i > 9; i--) {
    if (i === 13) break;
    console.log(i);
}

for (let i = 2; i < 10; i++) {
    if (i % 2 === 0)
        console.log(i);
}
let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++
}

let i = 2
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
    i++
}
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
return arrayOfNumbers;

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];

}
console.log(result);
return result;

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof (data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof (data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}
console.log(data);
return data;

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i]
}

console.log(result);
return result;

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 10;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);

function calc(a, b) {
    return (a - b);
}

console.log(calc(4, 3));
console.log(calc(7, 6));
console.log(calc(10, 6));

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

const usdCurr = 28;
const euroCurr = 35;

function convert(ammount, rate) {
    console.log(rate * ammount);
}
convert(500, euroCurr);


function sayHello(name) {
    return `Привет, ${name}!`;
}
sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof (times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    return str;
}
getMathResult(10, 3);


function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(6);

function getCoupeNumber(seat) {
    if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seat === 0 || seat > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seat / 4);
}
getCoupeNumber(32);

function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов'
    }
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(320)

function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');

function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
    return result;
}
fib(5)