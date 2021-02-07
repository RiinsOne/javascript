const log = argument => console.log(argument);

let fruit = 'orange';
let color = fruit;
log(fruit);  // orange
log(color);  // orange

fruit = 'watermelon';
log(fruit);  // watermelon
log(color);  // orange
// если изменить fruit, то color не поменяется, они не связаны

let nums = [5, 6, 7, 8];
let otherNums = nums;
nums.push(9);  // но с массивами две переменные будут связаны, если изменить один массив, то другой тоже изменится, т.к. у них есть линк между собой
log(nums);  // [ 5, 6, 7, 8, 9 ]
log(otherNums);  // [ 5, 6, 7, 8, 9 ]
otherNums.pop();
otherNums.pop();
otherNums.pop();
log(otherNums);  // [ 5, 6 ]
log(nums);  // [ 5, 6 ]
