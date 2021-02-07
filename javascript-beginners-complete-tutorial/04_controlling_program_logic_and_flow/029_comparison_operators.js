const log = argument => console.log(argument);

log(-2 > 1);  // false
log(10 < 999);  // true
log(2 >= 2);  // true

log('hello'.length >= 'hello!'.length);  // false
log('A' < 'a');  // true
log('B' < 'a');  // true
