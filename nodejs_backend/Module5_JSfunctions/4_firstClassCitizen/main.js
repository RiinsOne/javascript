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

const identity = v => v; // функция: v => v, константа: identity
console.log(identity(10)); // => 10

const z = identity;
console.log(z === identity); // => true

const x = 5;
console.log(z(x) === identity(x)); // => true


// Определяем функцию v => v и тут же вызываем ее
(v => v)('run'); // => run

// Тот же код с использованием промежуточной константы.
// Попробуйте мысленно заменить `identity` на `v => v`, тогда
// получится (v => v)('run'). С выражениями так можно поступать всегда.
// const identity = v => v;
// identity('run'); // => run

identity(v => v)('run'); // => run
// (v => v)(v => v)('run') // => run




//
