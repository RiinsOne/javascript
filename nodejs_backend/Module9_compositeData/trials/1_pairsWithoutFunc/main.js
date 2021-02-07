/* eslint-disable default-case */
/* eslint-disable consistent-return */
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
const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
  }
};

const car = pair => pair('car');
const cdr = pair => pair('cdr');
*/




const cons = (x, y) => (2 ** x) * (3 ** y);

const pair = cons(5, 8);
print(pair);

const car = (value) => {
  let count = 0;
  let valueNext = value;

  while (valueNext % 2 === 0) {
    count += 1;
    valueNext /= 2;
  }
  return count;
};
print(car(pair));

const cdr = (value) => {
  let count = 0;
  let valueNext = value;

  while (valueNext % 3 === 0) {
    count += 1;
    valueNext /= 3;
  }
  return count;
};
print(cdr(pair));

/*
export const car = f => f((a,b) => a);
export const cdr = f => f((a,b) => b);
*/


/*

Решение учителя

// BEGIN
const factor = (base, value) => {
  if (value % base !== 0) {
    return 0;
  }
  return 1 + factor(base, value / base);
};

export const cons = (a, b) => (2 ** a) * (3 ** b);
export const car = pair => factor(2, pair);
export const cdr = pair => factor(3, pair);
// END


*/


/*

Решение biscuit

// BEGIN (write your solution here)
const cons = (a, b) => (2 ** a) * (3 ** b);

const car = (pair) => {
  const iter = (i, acc) => {
    if (acc % 2 !== 0) {
      return i;
    }
    return iter(i + 1, acc / 2);
  };

  return iter(0, pair);
};

const cdr = (pair) => {
  let p = pair;
  let i = 0;
  while (p % 3 === 0) {
    i += 1;
    p /= 3;
  }

  return i;
};
export { cons, car, cdr };
// END


*/


/*

Решение hightower

// BEGIN (write your solution here)
export const cons = (a, b) => {
  return 2 ** a * 3 ** b;
}

export const car = (pair) => {
  if (pair === 1) {
    return 0;
  }
  if (pair === 2) {
    return 1;
  }
  let c = 0;
  for (let i = pair ; i >= 1 ; i -= 0) {
    if (i % 2 === 0) {
      c += 1;
    }
    i -= i / 2;
  }
  return c;
}

export const cdr = (pair) => {
  if (pair === 1) {
    return 0;
  }
  if (pair === 3) {
    return 1;
  }

  const cd = pair / Math.pow(2, car(pair));
  console.log(cd);

  for (let z = 1; z >= 0 ; z += 1 ) {

    if (Math.pow(3,z) >= cd) {
      return z;
    }
  }
  return 'error';
}
// END


*/





//
