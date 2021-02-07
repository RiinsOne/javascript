import {
    node, append, make
} from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = removeHeader(html3);

//<p>content</p>
toString(processedHtml);

//

import {
    l, isEmpty, is, head, tail, cons
} from 'hexlet-pairs-data';

export const removeHeader = (elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const element = head(elements);
    const tailElements = tail(elements);
    if (is('h2', element)) {
        return removeHeaders(tailElements);
    }
    return cons(element, removeHeaders(tailElements));
};

//

import {
    node, append, make, filter
} from 'hexlet-html-tags';

const html1 = append(make(), node('h2', 'header1'));
const html2 = append(html1, node('h2', 'header2'));
const html3 = append(html2, node('p', 'content'));

const processedHtml = filter(element => !is('h2', element), html3);
// !is('h2', elemet) - функция предикат
// если возвращает true, то остается в списке
// если false, то не будет

// <p>content</p>
toString(processedHtml);

// ('p', 'content', 'h2', 'header2', 'h2', 'header1')

export const filter = (func, elements) => {
    if (isEmpty(elements)) {
        return l();
    }

    const current = head(elements);
    const tailElements = tail(elements);
    if (func(current)) {
        return cons(current, filter(func, tailElements));
    }
    return filter(func, tailElements);
};


//

export const filter = (func, someList) => {
    const iter = (iterList, acc) => {
      if (isEmpty(iterList)) {
        return reverse(acc);
      }
      const iterListHead = head(iterList);
      const newAcc = func(iterListHead) ? cons(iterListHead, acc) : acc;
      return iter(tail(iterList), newAcc);
    };
  
    return iter(someList, l());
};


export const quotes = (elements) => {
    const filtered = filter(element => is('blockquote', element), elements);
    const result = map(getValue, filtered);
    return result;
};




//

// BEGIN
export const filter = (func, elements) => {
    const iter = (items, acc) => {
      if (isEmpty(items)) {
        return reverse(acc);
      }
      const item = head(items);
      const newAcc = func(item) ? cons(item, acc) : acc;
      return iter(tail(items), newAcc);
    };
  
  return iter(elements, l());
};

export const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  const result = map(getValue, filtered);
  return result;
};
// END

//

// BEGIN (write your solution here)
export const filter = (fn, elements) => {
    const iter = (acc, content) => {
      if (isEmpty(content)) {
        return reverse(acc);
      }
      const element = head(content);
      if (fn(element)) {
        return iter(cons(element, acc), tail(content));
      }
  
      return iter(acc, tail(content));
    };
  
    return iter(l(), elements);
};
  
export const quotes = (content) => {
    const quoteElements = filter(element => is('blockquote', element), content);
    return map(getValue, quoteElements);
};
  // END


//
// BEGIN (write your solution here)
export const filter = (func, elements) => {
    const iter = (elems, acc) => {
      if (isEmpty(elems)) {
        return reverse(acc);
      }
      if (func(head(elems))) {
        return iter(tail(elems), cons(head(elems), acc));
      }
      return iter(tail(elems), acc);
    };
    return iter(elements, l());
};
  
export const quotes = (dom) => {
    if (isEmpty(dom)) {
      return l();
    }
    const elem = head(dom);
    if (is('blockquote', elem)) {
      return cons(getValue(elem), quotes(tail(dom)));
    }
    return quotes(tail(dom));
};
  // END
//
