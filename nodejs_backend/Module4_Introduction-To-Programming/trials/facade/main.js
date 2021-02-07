function Br() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function doubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const print = (n) => { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
};

/*
// BEGIN (write your solution here)
import { pow2 as pow } from './numbers2';
import { sum2 as sum } from './numbers2';
import { sub2 as sub } from './numbers2';
import { default as sqrt } from './numbers3';
import { default as multi } from './numbers2';
import { default as cube } from './numbers1';

export { pow, sum, sub, sqrt, multi };
export default cube;
// END
*/

/*
Решение учителя
// BEGIN
import cube from './numbers1';
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2';
import sqrt from './numbers3';

export { cube as default, multi, pow, sum, sub, sqrt };
// END
*/

//
