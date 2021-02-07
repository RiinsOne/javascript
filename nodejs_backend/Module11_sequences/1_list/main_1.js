export const has = (list, num) => {
    if (isEmpty(list)) return false;

    if (head(list) === num) return true;
    return has(tail(list), num);
};

export const reverse = (list) => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return acc;

        const headItems = head(items);
        const tailItems = tail(items);

        return iter(tailItems, cons(headItems, acc));
    }

    return iter(list, l());
};

export const concat = (list1, list2) => {
    if (isEmpty(list1)) return list2;

    return cons(head(list1), concat(tail(list1), list2));
};
