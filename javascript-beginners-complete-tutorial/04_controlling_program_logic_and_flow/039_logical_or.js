const log = argument => console.log(argument);

log(true || false);  // true
log(0 || undefined);  // undefined

let age = 78;  // You get in for free.

if (age < 6 || age >= 65) {
    console.log('You get in for free.');
}
else {
    log('You must pay!');
}

log('-----');

let color = 'violet';
if (color === 'purple' || color === 'lilac' || color === 'violet') {
    log('Great choice!');
}
