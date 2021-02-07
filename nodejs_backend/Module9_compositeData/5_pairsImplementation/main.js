// # Pairs

const pair = cons(a, b);

a === car(pair); // true
b === cdr(pair); // true


// # Implementation

const cons = (a, b) => (message) => {
  switch (message) {
    case 'car':
      return a;
    case 'cdr':
      return b;
  }
};

const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');


// const pair = cons(4, 5);
// car(pair); // 4
// pair('car')


export const cons = (x, y) => f => f(x, y);

export const cdr = f => f((a,b) => b);
export const car = f => f((a,b) => a);



// # Решение учителя

// BEGIN
export const car = z => z(x => x); // second arg unused here
export const cdr = z => z((x, y) => y);
// END











//
