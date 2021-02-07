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
const areBracketsBalanced = (brackets) => {
  if (brackets === '') {return true;}
  let left = 0;
  let right = 0;
  let result;
  for (let i = 0; i < brackets.length; i++) {
    brackets[i] === '(' ? left++ : right++;
    if (right > left) {
      result = false;
      break;
    }
    result = left === right;
  }
  return result;
}

*/

/*
Решение учителя
// BEGIN
export default (str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};
// END
*/

/*
Решение unin51f-shepard
// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
  let balance = 0;
  for (let i = 0; i < str.length; i += 1) {
    str[i] === '(' ? balance += 1 : balance -= 1;
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
}
// END
*/

//
