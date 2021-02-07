function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const pi = 3.14;

/*
let factorial = 1;

factorial *= 2; // factorial = factorial * 2;
factorial = factorial * 3; // eslint-disable-line
factorial = factorial * 4; // eslint-disable-line
factorial = factorial * 5; // eslint-disable-line
*/

const factorial = (n) => {
  let counter = 1;
  let result = 1;

  while (counter <= n) {
    result = result * counter; // общее название итерация
    counter = counter + 1;
  }
  return result;
};
// такой стиль называется - императивное программирование
document.write(factorial(4));

ogDoubleBr();
const smallestDivisor = (n) => {
  let divisor = 2;

  if (n < 1) {
    return NaN;
  } if (n === 1) {
    return n;
  } if (n % divisor === 0) {
    return divisor;
  } while (n % divisor !== 0) {
    divisor += 1;
  }
  return divisor;
};
document.write(smallestDivisor(55));
ogBr();
document.write(smallestDivisor(121));
ogBr();

/*
const smallestDivisor = (n) => {
  const interIter = (mainValue, divisor) => {
    if (mainValue === 1 && mainValue > 0) {
      return 1;
    } if (mainValue % divisor === 0) {
      return divisor;
    }
    return interIter(mainValue, divisor + 1);
  };
  return interIter(n, 2);
};
*/



//
