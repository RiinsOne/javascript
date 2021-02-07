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

// const length = str => str.length;

const sumOfSquareDigits = (num) => {
  const numStr = String(num);
  let sum = 0;
  for (let i = 0; i < numStr.length; i += 1) {
    const int = Number(numStr[i]);
    sum += int * int;
  }
  return sum;
};

const isHappyNumber = (num) => {
  let newNum = num;
  ogWrite(num);
  for (let i = 0; i < 10; i += 1) {
    newNum = sumOfSquareDigits(newNum);
    ogWrite(newNum);
    if (newNum === 1) {
      return true;
    }
  }
  return false;
};


ogWrite(isHappyNumber(113));

/*

*/



//
