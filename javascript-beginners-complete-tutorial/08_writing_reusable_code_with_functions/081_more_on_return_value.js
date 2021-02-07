function square(x) {
    return x * x;
    console.log('All done!');  // never run, because after return
}
square(5);
const result = square(11);
console.log(result);

function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false;
    }
}
console.log(isPurple('bLuE'));  // false
console.log(isPurple('PuRpLe'));  // true

console.log('----------');

function isBlue(color) {
    if (color.toLowerCase() === 'blue') {
        return true;
    }
    return false;
}
console.log(isBlue('blue'));  // true
console.log('----------');

function isPink(color) {
    return color.toLowerCase() === 'pink';
}
console.log(isPink('pink'));  // true
console.log(isPink('blue'));  // false
console.log('----------');

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}
console.log(containsPurple(['blue', 'pink', 'magenta']));  // true
console.log(containsPurple(['blue', 'pink', 'red']));  // false
