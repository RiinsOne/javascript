/* eslint-disable*/

import {
    node, append, make
} from 'hexlet-html-tags';


const bg1 = node('blockquote', 'quote');
const bg2 = node('blockquote', 'another quote');
const html1 = append(make(), bg1);
const html2 = append(html1, bg2);
const processedHtml = b2p(html2);

//<p>quote</p>
//<p>another quote</p>
toString(processedHtml);


export const b2p = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const element = head(elements);
    let newElement;
    if (is('blockquote', element)) {
        newElement = node('p', value(element));
    } else {
        newElement = element;
    }

    return cons(newElement, b2p(tail(elements)));
};

//

import {
    node, append, make, map
} from 'hexlet-html-tags';


const bg1 = node('blockquote', 'quote');
const bg2 = node('blockquote', 'another quote');
const processedHtml = map(element => {
    if (is('blockquote', element)) {
        return node('p', value(element));
    }
    return element;
}, append(append(make(), bg1), bg2));

//<p>quote</p>
//<p>another quote</p>
toString(processedHtml);


// Преимущества
// 
// - Универсальный код
// - Декларативный код
// - Абстрагирование от структуры

// [1, 2, 3] => [10, 20, 30]

// functional way
[1, 2, 3].map(x => 10 * x);

// imperative way
const result = [];
for (let i of [1, 2, 3]) {
    result.push(i * 10);
}


// Отображение последовательности
export const map = (func, elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const newElement = func(head(elements));
    return cons(newElement, map(func, tail(elements)));
};


import { l, map, toString } from 'hexlet-pairs-data';

const list = l(4, 16, 64);
const list2 = map(Math.sqrt, list);
console.log(toString(list2)); // (2, 4, 8)

const list3 = map(item => item + 5, list);
console.log(toString(list3)); // (9, 21, 69)

//

// BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }

//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
export const map = (func, elements) => {
    const iter = (items, acc) => {
      if (isEmpty(items)) {
        return reverse(acc);
      }
      return iter(tail(items), cons(func(head(items)), acc));
    };
  
    return iter(elements, l());
  };
  
  export const mirror = elements => map(element => node(getName(element), reverseStr(getValue(element))), elements);

  // END

  export const b2p = (elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    let newElement;
    const element = head(elements);
    if (is('blockquote', element)) {
      newElement = node('p', getValue(element));
    } else {
      newElement = element;
    }
  
    return cons(newElement, b2p(tail(elements)));
  };
//



// Решение newta

import {
  l, isEmpty, head, tail, cons, reverse,
} from 'hexlet-pairs-data';

import {
  getName, getValue, node, is,
} from 'hexlet-html-tags';

import { reverse as reverseStr } from './strings';

import { toString as toStringHTML } from 'hexlet-html-tags';
import { toString as printToString } from 'hexlet-pairs-data';
// BEGIN (write your solution here)
export const map = (func, elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const newElement = func(head(elements));
  return cons(newElement, map(func, tail(elements)));
};
export const mirror = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  const newElement = node(getName(head(elements)), reverseStr(getValue(head(elements))));
  return cons(newElement, mirror(tail(elements)));
};
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', getValue(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};


// Решение fedor4ik 

// BEGIN (write your solution here)
export const map = (func, elements) => {
    if (isEmpty(elements)) {
      return l();
    }
    const newElement = func(head(elements));
    return cons(newElement, map(func, tail(elements)));
  };
  export const mirror = (list) => {
    const mirHelp = (elements) => {
      if (isEmpty(elements)) {
        return l();
      }
      const first = head(elements);
      const name = getName(first);
      const value = reverseStr(getValue(first));
      return cons(node(name, value), mirHelp(tail(elements)));
    };
    return mirHelp(list);
  };
  // END

// Решение heizo 

// BEGIN (write your solution here)
export const map = (func, elements) => {
    if (isEmpty(elements)) {
      return l();
    }
    const newElement = func(head(elements));
    return cons(newElement, map(func, tail(elements)));
  };
  export const mirror = (elements) => {
    return map(element => node(getName(element), reverseStr(getValue(element))), elements);
  };
  // END
  


// Решение user-5b037ab535ed2e5f 

// BEGIN (write your solution here)
export const map = (func, elem) => {
    if (isEmpty(elem)) return l();
  
    let dom = l();
    const iter = (func, elem) => {
      dom = cons(func(head(elem)), dom);
      if (isEmpty(tail(elem))) return;
      iter(func, tail(elem));
    };
    iter(func, elem);
    return reverse(dom);
  };
  
  export const mirror = elem => map((x => node(getName(x), reverseStr(getValue(x)))), elem);
  // END



//
