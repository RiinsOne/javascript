/* eslint-disable*/

export const map = (func, htmlList) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return reverse(acc);

        return iter(tail(items), cons(func(head(items)), acc));
    }

    return iter(htmlList, l());
};

export const mirror = elements => map(element => node(getName(element), reverseStr(getValue(element))), elements);
//
