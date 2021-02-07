const nums = [3, 4, 5, 6, 7];

const reducedNums1 = nums.reduce((total, currentVal) => {
    return total * currentVal;
});
console.log(reducedNums1);  // 2520
console.log(nums);
