const log = argument => console.log(argument);

log(typeof 99);  // number
log(typeof true);  // boolean

log(typeof 'mystery');  // string
log(typeof undefined);  // undefined
log(typeof null);  // object
log(typeof log);  // function
