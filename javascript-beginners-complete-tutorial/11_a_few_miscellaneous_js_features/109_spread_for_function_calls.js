const nums = [45, 23, 33, 7, 5];
console.log(Math.max(nums));  // NaN

// using spreads - трое точие
console.log(Math.max(...nums));  // 45


const colors = ['red', 'orange', 'yellow', 'green']

function giveMeFour(a, b, c, d) {
    console.log(a);
    console.log(b);
    console.log(c);
}
giveMeFour(...colors);
// red
// orange
// yellow

const str = 'GOAT';
giveMeFour(...str);
// G
// O
// A

const list = lst => {
    lst.forEach(function(elem) {
        console.log(elem);
    });
}
list(colors);
