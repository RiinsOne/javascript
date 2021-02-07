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
const identity = v => v;
identity('wow'); // => wow

const sum = identity((a, b) => a + b);
print(sum(1, 8)); // => 9
*/

const generateSumFinder = () => {
  const sum = (a, b) => a + b; // создали функцию
  return sum; // и вернули её
};

const sum = generateSumFinder(); // sum теперь — функция, которую вернула функция generateSumFinder
print(sum(1, 5)); // => 6                 // sum складывает числа



// вызвали функцию, которая возвращает функцию,
// и тут же вызвали возвращенную функцию

print(generateSumFinder()(1, 5)); // => 6
// ((a, b) => a + b)(1, 5)

/*
Всегда, когда видите подобные вызовы f()()(), знайте: функции возвращаются!
*/

// предыдущий вариант для сравнения
// const generateSumFinder = () => {
//   const sum = (a, b) => a + b;
//   return sum;
// };

// новый вариант
const generateSumFinder2 = () => (a, b) => a + b;
// const generateSumFinder2 = () => ((a, b) => a + b);

/*
const sum = x => y => z => x + y + z;

// расставим скобки для того чтобы увидеть как функции вложены друг в друга
// const sum = x => (y => (z => x + y + z));

sum(1)(3)(5); // => 9
*/


/*
const sum = x => y => z => x + y + z;

// расставим скобки для того чтобы увидеть как функции вложены друг в друга
// const sum = x => (y => (z => x + y + z));

sum(1)(3)(5); // => 9


const inner1 = z => x + y + z;
const inner2 = y => inner1;
const sum = x => inner2;


sum(1)(3)(5); // => 9

const sum1 = x => y => z => x + y + z;

// sum(1);
const sum2 = y => z => 1 + y + z; // inner2

// sum(1)(3)
const sum3 = z => 1 + 3 + z; // inner1

// sum(1)(3)(5)
const sum4 = 1 + 3 + 5; // => 9
*/

const generate = f => arg => f(f(arg));
// const generate = f => (arg => f(f(arg)));

const f1 = generate(Math.sqrt);
print(f1(16)); // => 2
// generate(Math.sqrt)(16);

const f2 = generate(x => x ** 2);
print(f2(4)); // => 256
// generate(x => x ** 2)(4);

/*
const f1 = generate(x => x ** 2);
const f2 = generate(x => x ** 2);
console.log(f1 === f2); // => false
*/


const generateDouble = f => arg => f(f(arg));
const f3 = generateDouble(Math.sqrt);

/*
Функция, которая была возвращена из generateDouble, называется замыканием. Замыкание — это функция, «запомнившая» часть окружения, где она была задана. Функция замыкает в себе идентификаторы (все, что мы определяем) из лексической области видимости.
*/


/*
const secret = 'qwerty';
// Возвращается предикат.
const isCorrectPassword = savePassword(secret);

// Теперь можно проверять
console.log(isCorrectPassword('wrong password')); // => false
console.log(isCorrectPassword('qwerty')); // => true

const savePassword = password => passwordForCheck => password === passwordForCheck;
*/



//

/*
import debug from 'debug';

const logHttp = debug('http');
const logHandler = debug('handler');

logHttp('hello!');
logHttp('i am from http');

logHandler('hello from handler!');
logHandler('i am from handler');


http hello! +0ms
http i am from http +2ms
handler hello from handler! +0ms
handler i am from handler +1ms

*/

//

/*
function flip(fn) {
  return function(first, second) {
    var rest = [].slice.call(arguments, 2)
    return fn.apply(null, [second, first].concat(rest))
  }
}
*/

/*

Решение учителя

// BEGIN
export default f => (a, b) => f(b, a);
// END


*/





//








//
