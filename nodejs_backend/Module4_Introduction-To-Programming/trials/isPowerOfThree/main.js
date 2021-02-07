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
isPowerOfThree.js
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/

const isPowerOfThree = (n) => {
  if (n === 1) return true;
  else if (n % 3 === 0 && n % 2 !== 0 && n % 5 !== 0) {
    return true;
  } else return false;
};


print(isPowerOfThree(100));


//
