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
Сумма квадратов первых десяти натуральных чисел это 1^2 + 2^2 + 3^2 + ... + 10^2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/

const sumOfSquare = (n) => {
  const num = n;
  let result = 0;
  for (let i = num; i > 0; i -= 1) {
    result += i ** 2;
    // print(result);
  }
  return result;
};

print(sumOfSquare(10));

const squareSum = (n) => {
  const num = n;
  let result = 0;
  for (let i = num; i > 0; i -= 1) {
    result += i;
    // print(result);
  }
  return result ** 2;
};

doubleBr();
print(squareSum(10));

const sumSquareDifference = n => squareSum(n) - sumOfSquare(n);
doubleBr();
print(sumSquareDifference(10));

/*
Решение учителя
// BEGIN (write your solution here)
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);
// END
*/

/*
Решение hightower
// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
  let sum = 0;
  let squareSum = 0;
  for (let i = 1 ; i <= n ; i += 1) {
    sum += i;
    squareSum += i ** 2;
  }
  return sum ** 2 - squareSum;
}
// END

export default sumSquareDifference;
*/


//
