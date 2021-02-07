function ogBr() {
  document.write('<br>');
}

function ogDoubleBr() {
  document.write('<br>');
  document.write('<br>');
}

const surfaceAreaCalculator = radius => 4 * 3.14 * radius * radius;
/*
const surfaceAreaCalculator = (radius) => {
  return 4 * 3.14 * radius * radius;
};
*/
const surfaceOfMars = surfaceAreaCalculator(3390);
document.write(surfaceOfMars);
const percentageCalculator = (number, total) => number * 100 / total;

/*
const percentageCalculator = (number, total) => {
  return number * 100 / total;
};
*/
// console.log("How much of December is gone already? ");
// console.log(percentageCalculator(16, 31));
document.write('<br>');
document.write('How much of December is gone already? ');
document.write('<br>');
document.write(percentageCalculator(16, 31));

// старый формат определения функции
function hello() {
  return 'hello';
}

ogBr();
document.write(hello());

ogDoubleBr();
const f = x => x * x;
const y = 5;
document.write(f(y));
ogBr();
document.write(f(3.5));
ogBr();
const z = 3;
document.write(f(z));

ogDoubleBr();

const fun = (a, b) => a - b;
const x1 = 5;
const y1 = 8;

console.log(fun(x1, y1));
console.log(fun(y1, x1));

ogDoubleBr();

const identity = (value) => {
  return value;
  const a = 3 + 5; // eslint-disable-line
// этот код никогда не будет достигнут
};

console.log(identity(10));

/*
// задание из вопросов
const someFunction = x => 10 * 42;
const y2 = someFunction(9281);
document.write(y2);
*/

const hello1 = 'Hello, World!';
document.write(hello1);

ogBr();
const hello2 = str => str;
document.write(hello2('Hello, World!'));

ogBr();
function hello3() {
  return document.write('Hello, World!');
}
hello3();
//
