if (true) {
    let animal = 'eel';
}
// console.log(animal);  // animal is not defined
// переменная let в блоке, поэтому недоступна из вне

if (true) {
    var pet = 'cat';
}
console.log(pet);  // cat
// переменная var доступна из блока цикла

let nums = [5, 2, 6];
var i = 10;
for (var i=0; i<nums.length; i++) {
    console.log(i, nums[i]);
}
console.log(i);  // 3, а не 10, т.к. var i в for перезапишет
// i доступна из блока

var t = 5;
console.log(t);  // 5

var t = 15;
console.log(t);  // 15
// переменные через var можно передекларировать

function doubleArr(arr) {
    const result = [];
    // let double;
    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }
    // console.log(double);  // double недоступна, только если через var
    // либо double определить снаружи цикла for
    return result;
}
console.log(doubleArr([1, 2, 3]));  // [ 2, 4, 6 ]
