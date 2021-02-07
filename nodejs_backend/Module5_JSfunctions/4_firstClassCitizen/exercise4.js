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

apply.js

Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:

    Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
    Функцию для применения
    Аргумент для применения

apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply(3, Math.sqrt, 256); // => 2

apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53


*/

/*

Решение учителя

// BEGIN
const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

export default apply;
// END


*/


/*
function apply (a, b, c){
  if (a === 0) return c;
  c = b(c);
  return apply(a-1, b, c);
};
*/


/*

Решение unin51f-shepard

// BEGIN (write your solution here)
const apply = (repeat, task, arg) => {
  for (let i = 1; i <= repeat; i += 1) {
    arg = task(arg);
  }
  return arg;
}
// END

export default apply;


*/

/*

Решение user-2211436eb83e4aff

// BEGIN (write your solution here)
const apply = (count, func, arg) => {
  if (count === 0) {
    return arg;
  }
  return apply(count - 1, func, func(arg));
};
export default apply;
// END


*/

/*

Решение hightower

// BEGIN (write your solution here)
export default (times, func, arg) => {
  if (times === 0) {
    return arg;
  }
  const iter = (times, acc) => {
    if (times === 1) {
     return acc;
    }
    return iter(times - 1, func(acc));
  }

  return iter(times, func(arg));
}
// END


*/

/*

Решение astynax

// BEGIN (write your solution here)
const apply = (n, f, arg) => n <= 0 ? arg : apply(n - 1, f, f(arg));

export default apply;
// END


*/

//
