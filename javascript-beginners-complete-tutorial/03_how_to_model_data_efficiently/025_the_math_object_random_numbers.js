console.log(Math.PI);  // 3.141592653589793
console.log(Math);  // Object [Math] {}

console.log('-----');

function log(argument) {
    return console.log(argument);
};

log(Math.floor(3,657));  // 3
log(Math.floor(3.657));  // 3
log(Math.floor(3.9999999));  // 3
// Math.floor выравнивает к нижней границе

log('-----');

log(Math.round(4.6));  // 5
log(Math.round(4.4));  // 4
// Math.round округляет до ближайшего значения

log('-----');

log(Math.pow(2, 5));  // 32
log(Math.pow(3, 3));  // 27

log('-----');
log(Math.random());
// Рандомное значение от 0... до 0.9...

const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
log(step4);  // Random num from 1 to 10
log(Math.floor(Math.random() * 10) + 1);  // Same as previous

log(Math.floor(Math.random() * 6));  // from 0 to 5
log(Math.floor(Math.random() * 6) + 1);  // from 1 to 6
