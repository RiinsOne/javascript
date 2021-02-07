// тесты

const cards = l(
    cons('Алчный натиск скорости', () => 4),
    cons('Демонов маршрут воздаяния', health => Math.round(health * 0.3))
);
const game = make(cards);
const log = game('John', 'Ada');

assert.equal(length(log), ?);


// не поддается тестированию

// недетерминированный код
const card = random(cards);

const cardName = pairs.car(card);
const damage = pairs.cdr(card);
const newHealth = health2- damage;

// Инвентирование

// Прямой вызов
(cards) => {
    const card = random(cards);
    // to do something with card
}

// Инвертированный вызов
(cards, customRandom) => {
    const card = customRandom(cards);
    // to do something with card
}


// Тесты

const cards = l(
    cons('Тусклый маниту диспута', () => 7),
    cons('Мыслительный рубитель ограды', health => Math.round(health * 0.8))
);
  
let cardIndex = 1;
const game = make(cards, (pack) => {
    cardIndex = cardIndex === 0 ? 1 : 0;
    return get(cardIndex, pack);
});
  
const log = game('John', 'Ada');



//

let cardIndex = 1;

const getIndex = () => {
  cardIndex = cardIndex === 0 ? 1 : 0;
  return cardIndex;
};

for (let i = 0; i < 10; i += 1) {
  console.log(getIndex());
}

//

const customRandom = (cardIndex, minIndex, maxIndex) => {
    return () => {
      if (cardIndex > maxIndex) {
        cardIndex = minIndex;
      }
  
      const currentIndex = cardIndex;
      cardIndex += 1;
      return currentIndex;
    };
  };
  
console.log('Выводим индексы с 0 до 2. Начинаем с 0');
  
const getIndex = customRandom(0, 0, 2);
  
for (let i = 0; i < 6; i += 1) {
    console.log(getIndex());
}
  
console.log('Выводим индексы с 1 до 5. Начинаем с 2');
  
const getIndex2 = customRandom(2, 1, 5);
  
for (let i = 0; i < 10; i += 1) {
    console.log(getIndex2());
}

//

