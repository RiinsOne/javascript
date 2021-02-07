import { cons } from 'hexlet-pairs';
import { l, length } from 'hexlet-pairs-data';
import { make } from 'hexlet-card-game';

const cards = l(
    cons('Костяная кочерга гробницы', () => 6)
);
const game = make(cards);
const log = game('John', 'Ada');

assert.equal(length(log), 5);

// step ((health1, health2), message)

const step1 = get(0, log);
assert.equal(toString(car(step1)), '(10, 10)');
const step2 = get(1, log);
assert.equal(toString(car(step2)), '(10, 4)');
const step3 = get(2, log);
assert.equal(toString(car(step3)), '(4, 4)');
const step4 = get(3, log);
assert.equal(toString(car(step4)), '(4, -2)');
const step5 = get(4, log);
assert.equal(toString(car(step5)), '(4, -2)');

//

Решение учителя

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
    let stats;
    // В логе игроки всегда должны быть на своих местах. Первый игрок слева, второй - справа
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    // Хитрость решения учителя состоит в том, что данные игроков всегда меняются местами. Это видно
    // по вызову ниже. Параметры первого игрока становятся параметрами второго и наоборот.
    // Такой подход позволяет упростить логику и всегда считать что атакует игрок номер 1.
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);

//

Решение heizo

import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return consList(cons(cons(health1, health2), `${name1} был убит`), log);
    }
    if (health2 <= 0) {
      return consList(cons(cons(health1, health2), `${name2} был убит`), log);
    }
    const randomCard = random(cards);
    const card = car(randomCard);
    const damage = cdr(randomCard)();
    const newHealth1 = health1 - damage;
    const newHealth2 = health2 - damage;
    if (order === 1) {
      const message = `Игрок '${name1}' применил '${card}'
      против '${name2}' и нанес урон '${damage}'`;
      const step = cons(cons(health1, newHealth2), message);
      return iter(health1, name1, newHealth2, name2, 2, cons(step, log));
    }
    if (order === 2) {
      const message = `Игрок '${name1}' применил '${card}'
      против '${name2}' и нанес урон '${damage}'`;
      const step = cons(cons(newHealth1, health2), message);
      return iter(newHealth1, name1, health2, name2, 1, cons(step, log));
    }
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards => (name1, name2) => run(name1, name2, cards);

