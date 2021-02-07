function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;  // from 1 to 6
    console.log(`Rolled: ${roll}`);
}
rollDice();

function throwDice() {
    for (let i=0; i<6; i++) {
        rollDice();
    }
}
throwDice();
