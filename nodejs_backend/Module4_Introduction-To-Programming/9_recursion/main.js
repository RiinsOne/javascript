function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

/*
// const surfaceAreaCalculator = radius => 4 * 3.14 * radius * radius;
const surfaceAreaCalculator = (radius) => { // eslint-disable-line arrow-body-style
  return 4 * 3.14 * radius * radius;
};
document.write(surfaceAreaCalculator(5000));
*/

const square = (n) => {
  return n * n;
};
const surfaceAreaCalculator = (radius) => {
  return 4 * 3.14 * square(radius);
};
const surfaceOfMars = surfaceAreaCalculator(3390);
document.write(surfaceOfMars);

ogDoubleBr();
const factorial = (n) => {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1); // это и есть рекурсия
  }
};

const answer = factorial(2);
document.write(answer);

ogDoubleBr();
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } else if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};

document.write(sequenceSum(1, 5));
ogBr();
document.write(sequenceSum(4, 10));
ogBr();
document.write(sequenceSum(-3, 2));
ogBr();
document.write(sequenceSum(1, 21));
ogBr();
document.write(sequenceSum(1, 1));
ogBr();


//
