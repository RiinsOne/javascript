function makeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';

    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
                // аналог value: value, suit: suit
            })
        }
    }
    return deck;
}
// console.log(makeDeck());

function drawCard(deck) {
    return deck.pop()  // поп удаляет и возвращает последний элемент массива
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);
// console.log(card1);  // { value: 'A', suit: 'clubs' }
// console.log(myDeck.length);  // 51

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

    initializeDeck() {
        const {suits, values, deck} = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({value: value, suit: suit})
            }
        }
    },

    drawCard() {
        const card = this.deck.pop()
        this.drawnCards.push(card);
        return card;
    },

    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },

    shuffle() {
        const {deck} = this;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}


function shuffle(arr) {
    // loop over array backwards
    for (let i = arr.length - 1; i > 0; i--) {
        // pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        // swap
        [arr[i], arr[j]] = [arr[j], arr[i]];  // меняет элементы местами и изменяет основной массив
    }
}


myDeck.initializeDeck();  // сначала инициализация и колода пополнится
console.log(myDeck.deck.length);  // 52

card2 = myDeck.drawCard();
card3 = myDeck.drawCard();
console.log(card2);
console.log(myDeck.deck.length);  // 50
console.log(myDeck.drawnCards);  // [ { value: 'A', suit: 'clubs' }, { value: 'A', suit: 'spades' } ]

console.log('---------------');

myDeck.drawMultiple(5);
console.log(myDeck.drawnCards);

console.log('---------------');

const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
shuffle(letters);

console.log('---------------');

myDeck.shuffle();
console.log(myDeck.deck);
