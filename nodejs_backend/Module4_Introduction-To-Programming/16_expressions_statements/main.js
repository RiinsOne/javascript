function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write(n);
}

// const y = getAnswer();

const square = n => n * n;
const sumOfSquares = (n, m) => square(n) + square(m);
const squareSumOfSquares = (n, m) => square(square(n) + square(m));
/*
const square = num => num * num;

const sumOfSquares = (num1, num2) =>
  square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) =>
  square(sumOfSquares(num1, num2));
*/

ogWrite(square(5));
ogWrite(square(10));
ogWrite(sumOfSquares(5, 10));
ogWrite(sumOfSquares(10, -9));
ogWrite(squareSumOfSquares(1, 1));
ogWrite(squareSumOfSquares(2, 3));





ogWrite(12 + square(7 + 5) + square(square(2)));

/*
export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};
*/



//
