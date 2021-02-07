const log = argument => console.log(argument);

log(1 <= 2 && 5 === 5);  // true

let password = 'checkenGal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    log('Valid password!');
}
else {
    log('Invalid password!');
}

log('-----');

let num = 2;

if (num >= 1 && num <= 11) {
    log('Number is between 1 and 10');
}
else {
    console.log('Please guess a number between 1 and 10');
}
