/* eslint-disable*/
import {
    make, append, toString, node
} from 'hexlet-html-tags';

const html1 = make();
const html2 = append(html1, node('h1', 'hexlet'));
const p1 = node('p', 'hello, world');
const html3 = append(html2, p1);

// <h1>hexlet<h1>
// <p>hello, world</p>
toString(html3);

export const node = (nameTag, valueTag) => cons(nameTag, valueTag);

export const name = tag => car(tag);
export const value = tag => cdr(tag);

export const append = (dom, tag) => consList(tag, dom);

export const toString = (elements) => {
    if (isEmpty(elements)) {
        return '';
    }
    const element = head(elements); // ('h3', 'header3')
    const tag = name(element); // 'h3'
    return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};

/*
(('h3', 'header3'), ('h2', 'header2'), ('h1', 'hello world'), null)
1. ( toString(('h2', 'header2'), ('h1', 'hello world')) ) <h3>header3<h3>
2. ( toString('h1', 'hello world') <h2>header2<h2> ) <h3>header3<h3>
3. ( toString(l()) (<h1>hello world<h1>) (<h2>header2<h2>) (<h3>header3<h3>) )
4. <h1>hello world<h1> <h2>header2<h2> <h3>header3<h3>
*/

/*
export const toString = (list) => {
  const iter = (counter, newString) => {
    if (isEmpty(counter)) {
      return newString;
    }
    return iter(tail(counter), `<${name(head(counter))}>${value(head(counter))}</${name(head(counter))}>${newString}`);
  };
  return iter(list, '');
};
*/

/*
export const toString = (list) => {
  const elementToString = element => `<${car(element)}>${cdr(element)}</${car(element)}>`;
  if (isEmpty(list)) {
    return '';
  }
  const element = elementToString(head(list));
  if (tail(list) === null) {
    return element;
  }
  return toString(tail(list)) + element;
};
*/



// Создаем новый html-список
const dom1 = make();

// Создаем тег и сразу добавляем его в html
const dom2 = append(dom1, node('h1', 'hello, world')); // (('h1', 'hello world'), null)
// Еще раз
const dom3 = append(dom2, node('h2', 'header2')); // (('h2', 'header2'), ('h1', 'hello world'), null)

// Создаем новый тег
const tag = node('h3', 'header3');
// Добавляем созданный тег в html-список
const dom = append(dom3, tag); // (('h3', 'header3'), ('h2', 'header2'), ('h1', 'hello world'), null)

// Преобразуем html-список в строчку
toString(dom);
// => <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>

// Пример без создания промежуточных переменных
toString(append(make(), node('p', 'this is Sparta!')));
// <p>this is Sparta!</p>


/*

Решение heizo

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (tag, content) => cons(tag, content);
export const name = element => car(element);
export const value = element => cdr(element);
export const append = (dom, element) => consList(element, dom);
export const toString = (dom) => {
  const iter = (index, acc) => {
    if (isEmpty(index)) {
      return acc;
    }
    return iter(tail(index), `<${name(head(index))}>${value(head(index))}</${name(head(index))}>${acc}`);
  };
  return iter(dom, '');
};
// END

*/



/*

Решение fedor4ik

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (x, y) => cons(x, y);
export const name = pair => car(pair);
export const value = pair => cdr(pair);
export const append = (list, pair) => cons(pair, list);
export const toString = (list) => {
  if (isEmpty(list)) {
    return '';
  }
  return `${toString(tail(list))}<${car(head(list))}>${cdr(head(list))}</${car(head(list))}>`;
};
// END


*/

/*

Решение heizo

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);
export const name = content => car(content);
export const value = content => cdr(content);
export const append = (dom, content) => cons(content, dom);
export const toString = (dom) => {
  if (isEmpty(dom)) {
    return '';
  }
  const element = head(dom);
  const tag = name(element);
  return `${toString(tail(dom))}<${tag}>${value(element)}</${tag}>`;
};
// END


*/

/*

Решение hightower

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

export const make = () => l();
// BEGIN (write your solution here)
export const node = (name, value) => cons(name, value);

export const name = nod => car(nod);

export const value = nod => cdr(nod);

export const append = (dom, nod) => cons(nod, dom);

export const toString = (dom) => {
  if (isEmpty(dom)) {
    return '';
  }
  let tag = car(head(dom));
  let value = cdr(head(dom));

  return toString(tail(dom)) + `<${tag}>${value}</${tag}>`;
};
// END


*/

/*

*/






//
