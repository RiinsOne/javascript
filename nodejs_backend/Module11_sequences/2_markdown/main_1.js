export const node = (name, value) => cons(name, value);
export const name = node => car(node);
export const value = node => cdr(node);
export const append = (node, newNode) => cons(newNode, node);

export const toString = (htmlList) => {
    if (isEmpty(htmlList)) return '';

    const headHtmlList = head(htmlList);
    const tailHtmlList = tail(htmlList);
    const tagName = name(headHtmlList);
    const tagValue = value(headHtmlList);

    return `${toString(tailHtmlList)}<${tagName}>${tagValue}</${tagName}>`;
};
