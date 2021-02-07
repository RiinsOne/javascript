function getCard() {
    const values = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10',
        'J', 'Q', 'K', 'A',
    ];
    const valIdx = Math.floor(Math.random() * values.length);
    const value = values[valIdx];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit = suits[suitIdx];

    return {
        value: value,
        suit: suit,
    }
}
console.log(getCard());
console.log('----------');

function pick(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCardTwo() {
    const values = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10',
        'J', 'Q', 'K', 'A',
    ];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    return {
        value: pick(values),
        suit: pick(suits),
    }
}
console.log(getCardTwo());
