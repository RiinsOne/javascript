function add(x, y) {
    return x + y;
}

const subtrack = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

const operations = [add, subtrack, multiply, divide];
console.log(operations[1](100, 4));  // 96
// и так далее по другим функциям

for (let func of operations) {
    console.log(func(30, 5));
}
// функции можно вложить в массив, словари (объекты), использовать через циклы (динамично)

const thing = {
    doSomething: multiply,
}
console.log(thing.doSomething(50, 2));  // 100
// вложил функцию в объект мы создали метод
