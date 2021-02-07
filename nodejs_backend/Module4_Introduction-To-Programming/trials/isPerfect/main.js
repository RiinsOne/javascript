function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
}


/*
const isPerfect = (num) => {
  let result = 1;

  for (let i = 2; i < num; i++) {
    let digit = num / i;
    //console.log('1: ' + digit + ', 2: ' + (digit ^ 0));
    if ((digit ^ 0) != digit) {
      digit = 0;
    }

    result += digit;
  }

  if (result === num) {
    return true;
  }

  return false;
};


const isPerfect = (n) => {
let count = 1;
let sum = 1;

  if (n === 6){
    return true;
  }

  if (n%2 !== 0 || n === 0) {
    return false;
  }

  while (n === n){

    if (sum > n){
      return false;
    }
    if (sum === n){
      return true;
    }
    count += 2;
    sum += count**3;
    }
}


// BEGIN (write your solution here)
const isPerfect = (num) => {
  if (num === 0) return false;

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};
// END



*/



//
