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
Решение artnik
// BEGIN (write your solution here) (write your solution here)
const factorial = (n) => {
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
};

const withoutTwoZeros = (num1, num2) => {
  if (num2 + 1 === num1) {
    return 1;
  }
  if (num2 + 1 < num1) {
    return 0;
  }

  const result = (factorial(num2 + 1)) / (factorial(num1) * (factorial((num2 + 1) - num1)));
  return Math.round(result);
};
export default withoutTwoZeros;
// END
*/

/*
Решение учителя
// BEGIN (write your solution here)
const withoutTwoZeros = (a, b) => {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};

export default withoutTwoZeros;
// END
*/

//
