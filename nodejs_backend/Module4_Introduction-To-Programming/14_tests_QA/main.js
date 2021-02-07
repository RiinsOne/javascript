function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write(n);
}

const square = n => n ** 2;

ogWrite(Math.pow(2, 2)); // eslint-disable-line
// Math.pow уже не используется, вместо него **

ogBr();
ogWrite(square(6));
ogBr();
ogWrite(square(100));
ogBr();
ogWrite(square(-3));

ogDoubleBr();

/*
библиотека assert

assert(square(2) === 4);
assert(square(6) !== 4);
assert.equal(square(2), 4);
*/

//


/*
import assert from 'assert';
import factorial from './implementations';

// Example
assert.equal(factorial(2), 2);
assert.equal(factorial(3), 6);

// BEGIN
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(4), 24);
// END
*/
