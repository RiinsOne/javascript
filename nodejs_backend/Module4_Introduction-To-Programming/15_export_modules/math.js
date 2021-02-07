export const pi = 3.14; // eslint-disable-line
export const e = 2.718;

export const square = x => x * x;
export const surfaceArea = r => 4 * pi * square(r);

/*
Сделать одну позицию экспортируемой по умолчанию
export default surfaceArea;


Можно также экспортировать функцию или константу без имени
const pi = 3.14;
const e = 2.718;

const square = (x) => {
  return x * x;
};

export default (r) => {
  return 4 * pi * square(r);
};


Импортирование чего-то, что было экспортировано по умолчанию
import surfaceArea from './math';

const surfaceOfMars = surfaceArea(3390);
*/

/*
При экспорте функции без имени, её имя в модуле будет
определяться в момент импорта, т.е. один и тот же
экспорт может иметь разные имена в разных модулях:

math.js
export default () => {
  ///
};


import1.js
import something1 from './math';

import2.js
import something2 from './math';

*/
