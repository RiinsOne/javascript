/* eslint-disable*/

import { head, tail, l } from 'hexlet-pairs-data';

const tree = l(l(1, 2), l(3, l(4, 5)), 6);

const countElements = (tree) => {
    if (!isList(tree)) {
        return 1;
    }
    if (isEmpty(tree)) {
        return 0;
    }

    return countElements(head(tree))
    + countElements(tail(tree));
};

//

import { l, cons, head, tail, isEmpty, isList, toString } from 'hexlet-pairs-data';

const hasZero = (list) => {
    if (isEmpty(list)) {
    return false;
}

    const current = head(list);
    const rest = tail(list);
    if (!isList(current)) {
    if (current === 0) {
        return true;
    }
    } else if (hasZero(current)) {
    return true;
}

    return hasZero(rest);
};

console.log(hasZero(l(1, 3, l(5, l(9), 3), 10)));
console.log(hasZero(l(1, l(l(5, 100), 0), 10)));


//
const select = (tagName, html) => reduce((element, acc) => {
    const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);

export default select;

//
Решение coolad
import { /* eslint-disable */
  l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
} from 'hexlet-pairs-data';

import {
  is, hasChildren, children, filter, reduce, toString as htmlToString,
} from 'hexlet-html-tags'; /* eslint-enable */

// BEGIN (write your solution here)
const select = (tagName, tree) => {
  const iter = (list, acc) => {
    if (isEmpty(list)) {
      return acc;
    }
    const current = head(list);
    const rest = tail(list);
    if (hasChildren(current)) {
      if (head(current) === tagName) {
        const newAcc = consList(current, acc);
        return iter(rest, iter(children(current), newAcc));
      }
      return iter(rest, iter(children(current), acc));
    }
    const newAcc = is(tagName, current) ? consList(current, acc) : acc;
    return iter(rest, newAcc);
  };
  // console.log(listToString(iter(tree, l())));
  return iter(tree, l());
};

export default select;
// END
//
Решение fedor4ik
// BEGIN (write your solution here)
const select = (tag, list) => {
    const addTag = (item, acc) => {
      let acc2 = is(tag, item) ? consList(item, acc) : acc;
      if (hasChildren(item)) {
        acc2 = concat(acc2, select(tag, children(item)));
      }
      return acc2;
    };
    return reduce(addTag, l(), list);
  };
  export default select;
  // END
//