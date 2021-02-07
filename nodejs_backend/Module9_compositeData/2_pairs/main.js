import { cons, car, cdr } from 'hexlet-pairs';

// Конструктор
const pair = cons(8, 7);

car(pair); // 8
cdr(pair); // 7

const pair2 = cons(3, pair);




// # Представление точек

import { cons, car, cdr } from 'hexlet-pairs';

const makePoint = (x, y) => cons(x, y);
// const makePoint = cons;

const getX = (point) => car(point);
const getY = (point) => cdr(point);
// const getX = car;
// const getY = cdr;

const toString = (point) => toString(point);




// # Представление отрезков

const point1 = makePoint(1, 2);
const point2 = makePoint(10, -2);

const segment = makeSegment(point1, point2);

startSegment(segment); // (1, 2);
endSegment(segment); // (10, -2);



//

/*
Шаг 1 - reversePair.js

Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую, в которой значения переставлены местами:

import { cons, car, cdr, toString } from 'hexlet-pairs';

const pair = cons('one', 'two');
console.log(toString(reversePair(pair))); // ('two', 'one')
*/
const reversePair = (pair) => cons(cdr(pair), car(pair));



/*
Шаг 2 - sumOfPairs.js

Реализуйте функцию sumOfPairs, которая принимает на вход две пары и возвращает новую пару, в элементах которой находятся суммы элементов из исходных пар:

import { cons, car, cdr, toString } from 'hexlet-pairs';

const pair1 = cons(4, 10);
const pair2 = cons(100, 0);
console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10)
*/
const sumOfPairs = (pair1, pair2) => {
  const sumCarPairs = car(pair1) + car(pair2);
  const sumCdrPairs = cdr(pair1) + cdr(pair2);
  return cons(sumCarPairs, sumCdrPairs);
}


/*
Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход "коробку" (пару), находит внутри нее пару без вложенных пар (как описано выше) и возвращает наружу.

import { cons, car, cdr, toString } from 'hexlet-pairs';

const pair = cons(
  null,
  cons('one', 'two'),
);
toString(findPrimitiveBox(pair)); // ('one', 'two')

const pair2 = cons(
  cons(null, cons(1, 5)),
  null,
);
toString(findPrimitiveBox(pair2)); // (1, 5)
*/

// BEGIN
const findPrimitiveBox = (pair) => {
  const first = car(pair);
  const last = cdr(pair);

  if (!isPair(first) && !isPair(last)) {
    return pair;
  }

  const next = isPair(first) ? first : last;
  return findPrimitiveBox(next);
};
// END


// BEGIN (write your solution here)
const findPrimitiveBox = (pair) => {
  if (isPair(car(pair))) {
    return findPrimitiveBox(car(pair));
  } else if (isPair(cdr(pair))) {
    return findPrimitiveBox(cdr(pair));
  } else {
    return pair;
  }
}
// END




























//
