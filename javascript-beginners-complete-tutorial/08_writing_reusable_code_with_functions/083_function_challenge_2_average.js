function avg(array) {
    let sum = 0;
    let num = 0;
    for (let el of array) {
        sum += array[num];
        num += 1;
    }
    return (sum / array.length)
}

console.log(avg([0, 50]));  // 25
console.log(avg([75, 76, 80, 95, 100]));  // 85.2

function avgTwo(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total / arr.length
}
