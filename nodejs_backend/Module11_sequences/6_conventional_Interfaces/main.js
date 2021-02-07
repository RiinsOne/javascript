/* eslint-disable*/

import {
    filter, map, reduce
} from 'hexlet-pairs-data';
import { is, value } from 'hexlet-html-tags';

const html2 = filter(item => is('h2', item), html);

const values = map(item => value(item), html2);

const words = reduce((value, acc) => addWords(acc, value), l(), values);

// reduce words


export const extractHeaders = elements => {
    const filteredElements = filter(current => is('h2', current), elements);
    return map(element => {
    if (is('h2', element)) {
    return node('p', getValue(element));
    }
    return element;
}, filteredElements);
};
export const wordsCount = (tagName, word, elements) => {
    const filteredElements = filter(item => is(tagName, item), elements);
    const values = map(getValue, filteredElements);

    const result = reduce((text, acc) => wc(word, text) + acc, 0, values);
    return result;
};  


//

export const extractHeaders = (html) => {
    const filteredHtml = filter(element => is('h2', element), html);
    return map(element => node('p', getValue(element)), filteredHtml);
};
export const wordsCount = (tag, word, html) => {
    const filteredHtml = filter(element => is(tag, element), html);
    const textFromHtml = reduce((element, acc) => getValue(element) + acc, '', filteredHtml);
    return wc(word, textFromHtml);
};

/*teacher
export const extractHeaders = (elements) => {
  const filtered = filter(element => is('h2', element), elements);
  return map(element => node('p', value(element)), filtered);
};

export const wordsCount = (tagName, word, elements) => {
  const filtered = filter(element => is(tagName, element), elements);
  const values = map(element => value(element), filtered);
  return reduce((text, acc) => wc(word, text) + acc, 0, values);
 
};
 */


//
