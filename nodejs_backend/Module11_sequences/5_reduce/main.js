import {
    node, append, make
} from 'hexlet-html-tags';

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));

const html4 = append(html3, node('h1', 'haskell'));
const html5 = append(html4, node('p', 'pure'));
const html6 = append(html5, node('h2', 'php'));

headerCount('h1', html6); // 2

//

import {
    l, isEmpty, is, head, tail
} from 'hexlet-pairs-data';

export const headersCount = (tagName, elements) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return acc;
        }

        const item = head(items);
        const newAcc = is(tagName, item) ? acc + 1 : acc;
        return iter(tail(items), newAcc);
    };

    return iter(elements, 0);
};

//

import {
    node, append, make, reduce
} from 'hexlet-html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc)) => {
return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2

//

import { l, cons, reduce, toString, head } from 'hexlet-pairs-data';

const list = l(0, -10, 2, 38, 2, -2);
const list2 = reduce(Math.max, head(list), list);
console.log(toString(list2)); // 38

const list3 = reduce((item, acc) => item + acc, 0, list);
console.log(toString(list3)); // 30


//
