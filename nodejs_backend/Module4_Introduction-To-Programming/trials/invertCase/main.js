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

const print = (n) => { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
};

/*
Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.

invertCase('Hello, World!'); // hELLO, wORLD!
invertCase('I loVe JS');     // i LOvE js

*/

const length = n => n.length;
const toUpperCase = n => n.toUpperCase();
const toLowerCase = n => n.toLowerCase();

const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (str[i] === toUpperCase(str[i])) {
      result += toLowerCase(str[i]);
    } else if (str[i] === toLowerCase(str[i])) {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }
  return result;
};



print(invertCase('hello, world!'));
print(invertCase('i love js'));

/*
// Решение учителя

// BEGIN
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};

export default invertCase;
// END

*/

/*
// Другое решение

// BEGIN (write your solution here)
const invertCase = (str) => {
  let inverted = '';
  const upperCase = str.toUpperCase();
  let counter = 0;
  while (counter < str.length) {
    if (str[counter] === upperCase[counter]) {
      inverted += str[counter].toLowerCase();
    } else {
      inverted += str[counter].toUpperCase();
    }
    counter += 1;
  }
  return inverted;
};

export default invertCase;
// END
*/

/*
// Ещё другое решение

// BEGIN (write your solution here)
export default str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase() ? newStr += str[i].toLowerCase() : newStr += str[i].toUpperCase();
  }
  return newStr;
}
// END

*/




//
