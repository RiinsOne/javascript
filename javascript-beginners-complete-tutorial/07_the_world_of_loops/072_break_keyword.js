// for (let i=0; i<10; i++) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
// }

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    if (target === guess) break;
    guess = Math.floor(Math.random() * 10);
    console.log(guess);
}
console.log(`Target: ${target} \n Guess: ${guess}`);
console.log(`Congrats you win!`);
