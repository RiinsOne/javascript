function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
}

ogWrite(typeof 42); // number
ogWrite(typeof 3.14); // number
ogWrite(typeof NaN); // number

ogWrite(typeof 'Berry'); // string
ogWrite(typeof true); // boolean
ogWrite(typeof false); // boolean

// неявные преобразования
ogBr();
ogWrite(4 + '7'); // eslint-disable-line
// '47'
ogWrite(4 * '7'); // 28
ogWrite(2 + true); // 3
ogWrite(false - 3); // -3

let a;
ogWrite(a); // undefined
let b = null;
ogWrite(b); // null


ogWrite(typeof null); // "object" (не null)
ogWrite(typeof undefined); // undefined
ogWrite(null === undefined); // false

ogWrite(null == undefined); // true
ogWrite(null === null); // true
ogWrite(null == null); // true
ogWrite(!null); // true

/*
isNaN(1 + null); //false
isNaN(1 + undefined); //true

1 === '1';    // false
1 == '1';     // true

true === 1;   // false
true == 1;    // true
*/

const showArgs = (x, y) => (`Arg 'x' equals ${x} & arg 'y' equals ${y}`);
ogWrite(showArgs(2, null));

ogWrite(13 / NaN);
ogWrite(9 / 0);
ogWrite(0);
ogWrite(13 / 'NaN');
ogWrite(45 - 45);



//
