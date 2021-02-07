// Interface

const rat = rational.make(5, 4);
rational.numer(rat); // 5
rational.denom(rat); // 4


n1/d1 + n2/d2 = (n1 * d2 + n2 * d1) / (d1 * d2)

n1/d1 * n2/d2 = (n1 * n2) / (d1 * d2)

n1/d1 = n2/d2, if n1 * d2 = n2 * d1




add(make(1, 10), make(4, 10)); // 5/10

// 1 way
make(5, 10); // 1/2

// 2 way
numer(make(5, 10)); // 1
denom(make(5, 10)); // 2



// Нормализация знака

make(-1, 2); // -1/2
add(make(-1, 3), make(2, 3)); // 1/3
add(make(-1, -4), make(2, 4)); // 3/4



//

export const make = (numer, denom) => cons(numer, denom);

export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const toString = rational => `${numer(rational)} / ${denom(rational)}`;

export const isEqual = (rational1, rational2) => {

  const a = numer(rational1);
  const b = denom(rational1);
  const c = numer(rational2);
  const d = denom(rational2);

  if ((a * d) === (c * b)) {
    return true;
  }
  return false;
};

export const add = (rational1, rational2) => {

  const a = numer(rational1);
  const b = denom(rational1);
  const c = numer(rational2);
  const d = denom(rational2);

  return make((a * d + b * c), (b * d));
};

export const sub = (rational1, rational2) => {

  const a = numer(rational1);
  const b = denom(rational1);
  const c = numer(rational2);
  const d = denom(rational2);

  return make((a * d - b * c), (b * d));
};

export const mul = (rational1, rational2) => {

  const a = numer(rational1);
  const b = denom(rational1);
  const c = numer(rational2);
  const d = denom(rational2);

  return make((a * c), (b * d));
};

export const div = (rational1, rational2) => {

  const a = numer(rational1);
  const b = denom(rational1);
  const c = numer(rational2);
  const d = denom(rational2);

  return make((a * d), (b * c));
};





Решение учителя
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN
export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const add = (x, y) => (
  make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y))
);

export const sub = (x, y) => (
  make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y))
);

export const isEqual = (x, y) => (
  numer(x) * denom(y) === numer(y) * denom(x)
);

export const mul = (x, y) => (
  make(numer(x) * numer(y), denom(x) * denom(y))
);

export const div = (x, y) => (
  make(numer(x) * denom(y), denom(x) * numer(y))
);

export const toString = rat => `${numer(rat)} / ${denom(rat)}`;
// END































//
