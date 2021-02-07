const book1 = makeBook('Дети капитана Гранта');
const book2 = makeBook('Приключения Тома Сойера');
const coll = makeColl('приключения');
const updatedColl1 = addBookToColl(coll, book1);
const updatedColl2 = addBookToColl(updatedColl1, book2);



const makeBook = name => name;

const book = makeBook('Дети капитана Гранта');
console.log(toString(book)); // Дети капитана Гранта


const makeBook = (name, rev) => cons(name, rev);
const book = makeBook('Дети капитана Гранта', 3);
console.log(toString(book)); // ('Дети капитана Гранта', 3);

// 1
// интерфейсные функции (абстракция)
const makeProduct = (name, cost) => cons(name, cost);
const getName = product => car(product);
const getCost = product => cdr(product);

// использование
const product = makeProduct('Сыр Пармезан', 100);
getName(product); // Сыр Пармезан
getCost(product); // 100


// 2
// интерфейсные функции (абстракция)
const makeDocument = (name, body) => cons(name, body);
const getName = document => car(document);
const getBody = document => cdr(document);

// использование
const document = makeDocument('Как я провел лето', 'Много текста');
getName(document); // Как я провел лето
getBody(document); // Много текста


// 3
// интерфейсные функции (абстракция)
const make3dPoint = (x, y, z) => cons(cons(x, y), z); // альтернатива cons(x, cons(y, z));
const getX = point => car(car(point));
const getY = point => cdr(car(point));
const getZ = point => cdr(point);

// использование
const point = make3dPoint(1, 10, -3);



const document = makeDocument('Как я провел лето', 'Много текста');
const product = makeProduct(document, 100);

//

export const makeSegment = (start, end) => cons(start, end);
export const startSegment = segment => car(segment);
export const endSegment = segment => cdr(segment);

export const segmentToString = (segment) => '[' + pointToString(startSegment(segment)) + ', ' + pointToString(endSegment(segment)) + ']';

export const midpointSegment = (segment) => {
  const midPointX = (getX(startSegment(segment)) + getX(endSegment(segment))) / 2;
  const midPointY = (getY(startSegment(segment)) + getY(endSegment(segment))) / 2;
  return cons(midPointX, midPointY);
};



// Решение mantrid
import {
  makePoint, getX, getY, toString as pointToString,
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
const makeSegment = (point1, point2) => cons(point1, point2)

const startSegment = segment => car(segment);
const endSegment= segment => cdr(segment);

const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;
const midpointSegment = (segment) => {
	const x1 = car(car(segment));
	const y1 = cdr(car(segment));
	const x2 = car(cdr(segment));
	const y2 = cdr(cdr(segment));

	return makePoint((x1 + x2) / 2, (y1 + y2) / 2);
};

export { makeSegment, startSegment, endSegment, midpointSegment, segmentToString };

// END




// Решение учителя
import {
  makePoint, getX, getY, toString as pointToString,
} from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN
export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = segment => car(segment);

export const endSegment = segment => cdr(segment);

export const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};
// END









//
