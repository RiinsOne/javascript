const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
console.log('target', target);
console.log('guess', guess);
while(guess !== target) {
    guess = Math.floor(Math.random() * 10);
    console.log('guess', guess);
}

// while(some condition)
// in the loop, update or attempt to make that condition false
