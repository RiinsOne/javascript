function callThreeTimes(f) {
    f();
    f();
    f();
}

function cry() {
    console.log('Boo Hoo I\'m so sad!');
}
callThreeTimes(cry);
// Boo Hoo I'm so sad!
// Boo Hoo I'm so sad!
// Boo Hoo I'm so sad!

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}
function rage() {
    console.log('I hate everything!');
}
repeatNTimes(rage, 2);


function pickOne(f1, f2) {
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
        f1();
    }
    else {
        f2();
    }
}
pickOne(cry, rage);
