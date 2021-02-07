/*
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = str[i] !== ' ' && (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
*/

/*
import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const funkt = str => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if ((i === 0) || ((str[i] !== ' ') && (str[i-1] === ' '))) {
      result += toUpperCase(str[i]);
    }
    else {
      result += str[i];
    }
  }
  return result;
};

export default funkt;
// END
*/

/*
import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i++) {
    if (i === 0) {
      result += toUpperCase(str[i]);
    } else if (str[i - 1] === ' ') {
      result += toUpperCase(str[i]);
    } else {
      result += str[i];
    }
  }

  return result;
};

export default solution;
// END
*/
