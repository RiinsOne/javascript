// function sum() {
//     const argsArray = [...arguments];
//     return argsArray.reduce((total, val) => {
//         return total + val;
//     })
// }

function sum(...nums) {
    console.log(nums);
}
sum(4, 5, 6, 7, 8);  // массив - [ 4, 5, 6, 7, 8 ]

function sum1(...nums) {
    return nums.reduce((total, val) => {
        return total + val;
    })
}
console.log(sum1(4, 5, 22, 21, 2));  // 54

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}
fullName('tom', 'jones', 'III', 'order of the phoenix');
// first tom
// last jones
// titles [ 'III', 'order of the phoenix' ]

// rest parameter must be last formal parameter

const multiply = (...nums) => (
    nums.reduce((total, val) => total * val)
);
console.log(multiply(4, 2, 1, 3, 4, 3));  // 288
