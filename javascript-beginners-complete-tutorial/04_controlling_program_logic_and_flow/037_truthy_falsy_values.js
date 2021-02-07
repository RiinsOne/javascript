// let mystery = 5;  // Truthy
// let mystery = NaN;  // Falsy
let mystery = 0 / 0;  // Falsy

if (mystery) {
    console.log('Truthy!');
}
else {
    console.log('Falsy');
}

/*
Falsy values:
false
0
'' (empty string)
null
undefined
NaN
*/

console.log('-----');

// let loggedInUser = 'og';
let loggedInUser;

if (loggedInUser) {
    console.log('You are logged in!');
}
else {
    console.log('Please log in!');
}
