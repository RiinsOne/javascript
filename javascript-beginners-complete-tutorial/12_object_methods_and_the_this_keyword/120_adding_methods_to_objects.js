// const add = function(x, y) {
//     return x + y
// }

const math = {
    add: function(x, y) {
        return x + y
    },
    multiply: function(x, y) {
        return x * y
    },
}
console.log(math);  // { add: [Function: add], multiply: [Function: multiply] }
console.log(math.add(2, 3));  // 5
