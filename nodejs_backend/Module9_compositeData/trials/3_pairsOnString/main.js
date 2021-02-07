/* eslint-disable no-shadow */
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

*/
const length = str => str.length;

const cons = (str1, str2) => `${str1}\\0${str2}`;
const pair = cons('computer', 'science');
print(pair);
print(length(pair));

const str1 = (pair) => {
  let str1 = '';
  for (let i = 0; pair[i] !== '\\'; i += 1) {
    str1 += pair[i];
  }
  return str1;
};
print(str1(pair));


const str2 = (pair) => {
  let str2 = '';
  for (let i = length(str1(pair)) + 2; i < length(pair); i += 1) {
    str2 += pair[i];
  }
  return str2;
};
print(str2(pair));



/*
Решение учителя

import length from './strings';

// BEGIN
const separator = '\0';

const getSeparatorPosition = (str) => {
  const iter = i => (str[i] === separator ? i : iter(i + 1));

  return iter(0);
};

const getValue = (pair, begin, end) => {
  const iter = (acc, i) => {
    if (i >= end) {
      return acc;
    }
    const newAcc = `${acc}${pair[i]}`;

    return iter(newAcc, i + 1);
  };

  return iter('', begin);
};

export const cons = (a, b) => `${a}${separator}${b}`;
export const car = pair => getValue(pair, 0, getSeparatorPosition(pair));
export const cdr = pair => getValue(pair, getSeparatorPosition(pair) + 1, length(pair));
*/

/*

Решение lev_a

import length from './strings';

// BEGIN (write your solution here)
export const cons = (a, b) => a + '\0' + b;

export const car = (p) => {
  const l = length(p);
  let out = '';
  let a = 1;
  for (let i = 0; i < l; i += 1) {
    if (p[i] === '\0') {
      a = 0;
    }
    if (a && p[i] !== '\0') {
      out += p[i];
    }
  }
  return out;
};

export const cdr = (p) => {
  const l = length(p);
  let out = '';
  let a = 0;
  for (let i = 0; i < l; i += 1) {
    if (p[i] === '\0') {
      a = 1;
    }
    if (a && p[i] !== '\0') {
      out += p[i];
    }
  }
  return out;
};
// END


*/


/*

Решение dinar

import length from './strings';

// BEGIN (write your solution here)
export const cons = (str1, str2) => `${str1}\0${str2}`;

export const car = (pair) => {
  let str = '';
  for (let i = 0; i < length(pair); i += 1) {
    if (pair[i] === '\0') return str;
    str += pair[i];
  }
};

export const cdr = (pair) => {
  let str = '';
  for (let i = 0; i < length(pair); i += 1) {
    if (pair[i] === '\0') {
      for (let j = i + 1; j < length(pair); j += 1) {
        str += pair[j];
      }
      return str;
    }
  }
};
// END


*/


/*

*/





//
