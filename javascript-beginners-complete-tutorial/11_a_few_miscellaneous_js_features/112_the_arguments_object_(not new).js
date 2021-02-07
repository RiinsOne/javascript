function some() {
    console.log(arguments);
}
some(1, 2, 3);  // [Arguments] { '0': 1, '1': 2, '2': 3 }

function sum() {
    const argsArray = [...arguments];
    return argsArray.reduce((total, val) => {
        return total + val;
    })
}
// sum(4, 232, 11);
// arguments.reduce is not a function
// нужно сделать массив

console.log(sum(4, 232, 11));  // 247


function fullName(first, last) {
    console.log(arguments);
}
fullName('tom', 'og', 'riins');  // [Arguments] { '0': 'tom', '1': 'og', '2': 'riins' }

// arguments - подобие args и kwargs в питоне
// не поддерживаются в стрелочных функциях
