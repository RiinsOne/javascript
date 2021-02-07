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


const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

ogWrite(reverseInt(12345));

// export default reverseInt;




/*
const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}

console.log(reversedNum(13))

console.log(reversedNum(-123))

console.log(reversedNum(8800))
*/


/*
// BEGIN
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

export default reverseInt;
// END
*/

/*
// BEGIN (write your solution here)
const reverseInt = (n) => {
  const minus = n < 0;
  let result = '';
  const str = String(n < 0 ? n * -1 : n);
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  result = Number(result);

  if (minus) {
    result *= -1;
  }

  return result;
};

export default reverseInt;
// END
*/


//
