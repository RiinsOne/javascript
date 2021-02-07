function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };
  return iter(n, 1);
};

/* Решение учителя

const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };
  return iter(2);
  };
*/

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

document.write(smallestDivisor(15));
ogBr();
document.write(smallestDivisor(31));
ogBr();
document.write(smallestDivisor(1));
ogBr();



//
