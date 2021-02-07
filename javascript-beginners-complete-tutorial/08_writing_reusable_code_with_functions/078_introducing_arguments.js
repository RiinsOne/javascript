function greet(nickhame) {
    console.log(nickhame);
}

greet('og');
greet([1, 2, 3, 4, 5]);
greet('----------');

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;  // from 1 to 6
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
    for (let i=0; i<numRolls; i++) {
        rollDice();
    }
}
throwDice(5);
