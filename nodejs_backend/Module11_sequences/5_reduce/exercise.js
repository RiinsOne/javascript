const reduce = (func, acc, elements) => {
    if (isEmpty(elements)) {
    return acc;
    }

    return reduce(func, func(head(elements), acc), tail(elements));
};

const emptyTagsCount = (tagName, elements) => {
    const predicate = element => is(tagName, element) && getValue(element) === '';
    const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
    return reduce(func, 0, elements);
};

//

Решение учителя
import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { getValue, is } from 'hexlet-html-tags';

// BEGIN
export const reduce = (func, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(func, func(head(elements), acc), tail(elements));
};

export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && getValue(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
// END

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

//

Решение annaka
import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { getValue, is } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, accum, listhtml) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(tail(items), func(head(items), acc));
  };
  return iter(listhtml, accum);
};
export const emptyTagsCount = (tegHtml, listhtml) => {
  const func = (element, acc) => {
    const emptyElment = (getValue(element) === '') ? acc + 1 : acc;
    const elementTeg = is(tegHtml, element) ? emptyElment : acc;
    return elementTeg;
  };
  return reduce(func, 0, listhtml);
};
// END

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

Решение mantrid
import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { getValue, is } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, counter, elements) => {
	const iter = (items, acc) => {
		if(isEmpty(items)) {
			return acc;
		}
		return iter(tail(items), func(head(items), acc));
	};
	return iter(elements, counter)
};

export const emptyTagsCount = (tagName, elements) => reduce((element, acc) => {
		if (is(tagName, element)) {
			return getValue(element) === '' ? acc + 1 : acc;
		}
	return acc;
}, 0, elements);

// END

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

Решение hightower
import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { getValue, is } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, acc, list) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(tail(items), func(head(items), acc));
  }
  return iter(list, acc);
}

export const  emptyTagsCount = (tagName, list) => {
  return reduce((element, acc) => {
    return (is(tagName, element) && getValue(element) === '') ? acc + 1 : acc;
  }, 0, list)
}
// END

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

