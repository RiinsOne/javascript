const log = argument => console.log(argument);

let fruits = ['apple', 'banana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meats = ['steak', 'chicken breast']

log(fruits.concat(veggies));  // соединяет массивы последовательно, сначала элементы первого массива, после второго
// [ 'apple', 'banana', 'asparagus', 'brussel sprouts' ]
log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);
log(allFood);
/*
[
'apple',
'banana',
'asparagus',
'brussel sprouts',
'steak',
'chicken breast'
]
*/
