function sayHi() {
    console.log('Hi');
    console.log(this);
}
sayHi();
// Hi
// Object [global] {
// global: [Circular],
// clearInterval: [Function: clearInterval],
// clearTimeout: [Function: clearTimeout],
// setInterval: [Function: setInterval],
// setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
// queueMicrotask: [Function: queueMicrotask],
// clearImmediate: [Function: clearImmediate],
// setImmediate: [Function: setImmediate] {
// [Symbol(util.promisify.custom)]: [Function]
// }
// }

// global
var color = 'teal';

console.log('---------------');

const greet = function() {
    console.log(this);
}
console.log(greet());
