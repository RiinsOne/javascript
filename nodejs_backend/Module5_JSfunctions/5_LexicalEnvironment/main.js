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

const showWarning = (field) => {
  // LexicalEnvironment = { field: 'email' }
  const warning = `verify your ${field}, please`;
  // LexicalEnvironment = { warning: 'verify your email, please', field: 'email' }
  console.log(warning);
};

const number = 5;
const square = () => number ** 2;
square(); // => 25

showWarning('email'); // => verify your email, please



/*
Так сработает:
// module1.js
const number = 5;
export const square = () => number ** 2;

// module2.js
import { square } from './module1';
square(); // => 25
*/

/*
Так не сработает:
// module1.js
export const square = () => number ** 2;

// module2.js
import { square } from './module1';

const number = 5;
square(); // => ReferenceError: number is not defined
*/

/*
const square = () => number ** 2;

let number = 5;
square(); // => 25

number = 3;
square(); // => 9
*/


const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter > n) {
      return acc;
    }
    print(acc);
    return iter(counter + 1, counter * acc);
  };

  return iter(1, 1);
};

print(factorial(5)); // => 120

/*
Перекрытие (Shadowing) - плохая практика
const f = (coll) => {
  const iter(item, coll) => {
    // using coll
  }
  // ...
}
*/

//
