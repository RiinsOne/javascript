function ogBr() { // eslint-disable-line
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


const age = 29;

const multiplier = (num) => { // num ведет себя почти как локальная переменная
  const x = 10; // локальная область видимости
  return num * x;
};

let result = true; // eslint-disable-line
// эти компоненты имеют глобальную область видимости


let a = 0;
const changer = () => {
  a += 1;
};
ogWrite(a);
console.log(a); // 0
changer();
ogWrite(a); // 1
// избегать глобальные области видимости



const createPrinter = () => {
  const name = 'King';
  const printName = () => {
    console.log(name);
  };
  return printName;
};

const myPrinter = createPrinter();
myPrinter(); // King
// называется замыкание (замкнула в себе некоторую информацию)


// exercise 17
/*
import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);
*/



//
