// first example
// function multiply(x, y) {
//     if (typeof y === 'undefined') {
//         y = 1;
//     }
//     return x * y;
// }
// console.log(multiply(4));

// second example
function multiply(x, y) {
    y = typeof y === 'undefined' ? 1 : y
    return x * y;
}
console.log(multiply(22));

// third example
function multiply2(x, y = 1) {
    return x * y;
}

const greet = (person, greeting='hi') => {
    console.log(`${greeting}, ${person}`)
}
greet('og');
