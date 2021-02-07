/* eslint-disable*/

// Пары

/*
import { cons, toString } from 'hexlet-pairs';

cons(5, 8);
const pair = cons(5, cons(2, 9));
toString(pair); // (5, (2, 9))
*/


// Замыкание (абстрактная алгебра)
cons(cons(3, 5), cons(2, 9));



// Последовательности
cons(1,
    cons(2, 
        cons(3, 
            cons(4, null))));



// Интерфейс

import {
    l, cons, head, tail, isEmpty, toString
} from 'hexlet-pairs-data';

// cons(1, cons(2, cons(3, cons(4, null))));
const list = l(1, 2, 3, 4);

cons(10, list); // (10, 1, 2, 3, 4)
toString(list); // (1, 2, 3, 4)

head(list); // 1
tail(list); // l(2, 3, 4)

// list === null
isEmpty(l(4)); // false
isEmpty(l()); // true



//

/*
cons(1, cons(2, cons(3, cons(4, cons(5, ...
    cons('one', cons('two', cons('three', cons('four', cons('five', ...
*/

// Не списки
cons(1, cons(cons(3, null), 2));
cons(1, cons(2, cons(3, 4)));
cons(cons(1, 2), cons(3, cons(4, null)));

// Списки
cons(1, cons(2, cons(3, null)));
cons('This', cons('is', cons('a', cons('list', null))));


cons(1, cons(2, cons(3, cons(4, cons(5, null))))); // (1, 2, 3, 4, 5)
l(1, 2, 3, 4, 5); // (1, 2, 3, 4, 5)

/*
cons(5, cons(2, cons(7, cons(11, cons(6, cons(14, null)))))); // создание списка
cons(3, 17); // создание точки
cons(8, 17); // создание рационального числа
cons(cons(3, 33), cons(-2, -22)); // создание сегмента (отрезка)
const rectangle = cons(cons(-2, 23), cons(5, 11)); // создание прямоугольника
2 * (car(cdr(rectangle)) + cdr(cdr(rectangle))); // вычисление периметра прямоугольника

list(5, 2, 7, 11, 6, 14);
makePoint(3, 17);
makeRational(8, 17);
makeSegment(makePoint(3, 33), makePoint(-2, -22));
const point = makePoint(-2, 23);
const rectangle = makeRectangle(point, 5, 11);
perimeter(rectangle);
*/

const has = (list, n) => {
    if (isEmpty(list)) return false;
    if (head(list) === n) return true;

    return has(tail(list), n);
};

const reverse = (list) => {
    const iter = (o, r) => {
    if (isEmpty(o)) {
        return r;
    }
    r = cons(`${head(o)}`, r);
        return iter(tail(o), r);
    }
    return iter(list, l()); // или null вместо acc
};

const concat = (l1, l2) => {
    if (isEmpty(l1)) {
        return l2;
    }
    return cons(head(l1), concat(tail(l1), l2));
};

/*
list1 = l(4, 5, 6)
list2 = l(1, 2, 3)

1. cons(4, concat(l(5, 6), l(1, 2, 3)));
2. cons(4, (cons(5, concat(l(6), l(1, 2, 3))));
3. cons(4, (cons(5, cons(6, concat(l(), l(1, 2, 3)))));
4. cons(4, (cons(5, cons(6, l(1, 2, 3)))))
*/





// BEGIN
export const has = (list, element) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === element) {
    return true;
  }

  return has(tail(list), element);
};

export const reverse = (list) => {
  const iter = (items, acc) => (
    isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc))
  );

  return iter(list, l());
};

export const concat = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), concat(tail(list1), list2));
};
// END






// Решение mantrid

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (numbers, a) => {	
	if(isEmpty(numbers) === true) {
		return false;
	}
	if(head(numbers) === a){
		return true;
	}
	return has(tail(numbers), a);
	};

export const reverse = (numbers) => {
	
	const iter = (items, acc) => {
		if (isEmpty(items)) {
			return acc;
		}
		return iter(tail(items), cons(head(items), acc));
	};
	return iter(numbers, l());
}; 

export const concat =(numbers, numbers2) => {
	if(isEmpty(numbers))
	return numbers2;

	return cons(head(numbers), concat(tail(numbers), numbers2));
};
 //{, reverse, concat};
// END



/*

Решение marazmatique

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (sps, x) => {
 
  switch (true) {
    case head(sps) === x:
    return true;
    break;
    case tail(sps) !== null:
    return has(tail(sps), x);
    break;
    default:
    return false;
    break;
  };
}

export const reverse = (sps) => {
  let s = null;
  for (sps ; !isEmpty(sps) ; sps = tail(sps)) {
    s = cons(head(sps), s);
  }
  return s;
}

export const concat = (sps1, sps2) => {
return sps1 !== null ? cons(head(sps1),concat(tail(sps1),sps2)) : sps2;
//
};
  
// END


*/


/*
Решение fedor4ik

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, number) => {
  const lisT = listToString(list);
  for (let i = 0; i < lisT.length; i += 1) {
    if (lisT[i] === String(number)) {
      return true;
    }
  }
  return false;
};
export const reverse = (list) => {
  const iter = (num, result) => {
    if (isEmpty(num)) {
      return result;
    }
    return iter(tail(num), cons(head(num), result));
  };
  return iter(list, l());
};
export const concat = (list1, list2) => {
  const copy = (list) => {
    if (isEmpty(list)) {
      return list;
    }
    return cons(head(list), copy(tail(list)));
  };
  if (isEmpty(list1)) {
    return copy(list2);
  }
  return cons(head(list1), concat(tail(list1), list2));
};
// END


*/

/*

Решение hightower

import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
export const has = (list, value) => {
  if (isEmpty(list)) {
    return false;
  }
  if (head(list) === value) {
     return true;
  }
  return has(tail(list),value);
}

export const reverse = list => {
  const iter = (list, newList) => {
    if (isEmpty(list)) {
      return newList;
    }
    let hl = head(list);
    return iter(tail(list), cons(hl, newList));
  }
  return iter(list, l());
}

export const concat = (l1, l2) => {
  if (isEmpty(l1)) {
    return l2;
  }
  
  return cons(head(l1),concat(tail(l1), l2));
}
// END


*/


/*

*/



//
