function Br() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function doubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const print = (n) => { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
};

/*
Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

isHappyTicket.js
Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
Подсказки
Преобразовать число в строку можно с помощью функции String:

String(1234); // '1234'
Преобразовать строку в число можно с помощью функции Number:

Number('456'); // 456
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
*/

const isHappyTicket = (n) => {
  const strNum = String(n);

  let firstHalf = '';
  let secondHalf = '';
  for (let i = 0; i < 3; i += 1) {
    firstHalf += strNum[i];
  }
  for (let j = 3; j < 6; j += 1) {
    secondHalf += strNum[j];
  }
  let sumFirstHalf = 0;
  for (let c = 0; c < firstHalf.length; c += 1) {
    sumFirstHalf += Number(firstHalf[c]);
  }
  let sumSecondHalf = 0;
  for (let i = 0; i < secondHalf.length; i += 1) {
    sumSecondHalf += Number(secondHalf[i]);
  }
  if (sumFirstHalf === sumSecondHalf) return true;
  return false;
};

print(isHappyTicket(385916));
print(isHappyTicket(231002));
print(isHappyTicket(128722));
print(isHappyTicket('054702'));

//




//




//
