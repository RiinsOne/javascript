function add(x, y) {
    return x + y;
}

const sum = function (x, y) {
    return x + y;
}

console.log(add(5, 4));
console.log(sum(4, 12));
console.dir(sum);
console.dir(add);

const product = function multiply(x ,y) {
    return x * y;
}
console.log(product(5, 5));  // 25
// console.log(multiply(2, 2));  // multiply is not defined
