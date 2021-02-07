function multiplyBy(num) {
    return function(x) {
        return x * num;
        // console.log('Hi!');
    }
}
// const mystery = multiplyBy();
// mystery();  // Hi!
// присваиваем const переменной функцию и дальше через вызов новой переменной с помощью аргументов (если нужно), вызываем вложенную функцию

const triple = multiplyBy(3);
console.log(triple(5));  // 15
console.log(triple(22));  // 66

const double = multiplyBy(2);
console.log(double(11));  // 22

const halve = multiplyBy(0.5);
console.log(halve(55));  // 27.5

console.log('----------');

function makeBetweenFunc(x, y) {
    return function(num) {
        // сокращенный вариант, вместо всего, что ниже
        // return num >= x && num <= y;
        if (num >= x && num <= y) {
            return true
        }
        return false;
    }
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(17));  // true
console.log(isChild(35));  // false

const isNiceWeather = makeBetweenFunc(65, 79);
console.log(isNiceWeather(45));  // false
