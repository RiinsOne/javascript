let rating = 'B';

if (rating === 3) {
    console.log('You are a superstar!');
}
else if (rating === 2) {
    console.log('Meets expectations!');
}
else if (rating === 1) {
    console.log('Need improvement!');
}
else {
    console.log('Invalid rating!');
}

console.log('-----')

let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(
        `Good Game. Your score of ${userScore} didn't beat the high score of ${highScore}`
    );
}
console.log(highScore);  // 1600
