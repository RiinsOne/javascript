let x = 7;
console.log(x == 7 || x === 3 && x > 10);  // true
// Порядок следующий
// x == 7 || (x === 3 && x > 10)
// x == 7 || (false && false)
// x == 7 || false
// true || false = true
console.log((x == 7 || x === 3) && x > 10);  // false
