
// Решение учителя
// BEGIN
export default (str, index = 0, substrLength = str.length) => {
  if (index >= str.length) {
    return '';
  }

  const currentIndex = index < 0 ? 0 : index;
  let lastIndex = currentIndex + (substrLength - 1);
  if (lastIndex + 1 < currentIndex) {
    lastIndex = currentIndex;
  } else if (lastIndex > str.length - 1) {
    lastIndex = str.length - 1;
  }

  let result = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};
// END

/*
Решение unin51f-shepard
// BEGIN (write your solution here)
const substr = (str, x = 0, y = str.length) => {
  if (y < 0) {
    return substr(str, x, 1);
  }
  if (y === 0) {
    return '';
  }
  if (str.length - x < y) {
    return substr(str, x, str.length - x);
  }
  if (x < 0) {
    return substr(str, 0, y);
  }
  if (x > str.length) {
    return '';
  }
  let result = '';
  for (let i = 0; i < y; i += 1) {
    result += str[x];
    x += 1;
  }
  return result;
}
// END

export default substr;
*/

/*
Решение hightower
// BEGIN (write your solution here)

const substr = (str, a = 0, z = str.length) => {

  if (str.length === 0 || z === 0 || a > str.length - 1) {
    return '';
  }
  if (a < 0) {
    a = 0;
  }
  if (z < 0) {
    z = 1;
  }
  if ((z + a - 1) > str.length - 1) {
    z = str.length - a;
  }

  return str[a] + substr(str, a += 1, z -= 1);
};
export default substr;
// END
*/

/*
Решение user-f3936c303bcca240
// BEGIN (write your solution here)
const cutStr = (begin, str) => {
  let res = '';
  for (let i = begin; i < str.length; i++) {
    res += str[i];
  }
  return res;
};

const substr = (str, begin = 0, end = str.length) => {
  if (!end && !begin) return str;

  if (end < 0) end = 1;
  if (begin < 0) begin = 0;
  if (end === 0 || begin > str.length || begin > end) return '';

  if (end > str.length) return cutStr(begin, str);

  let res = '';
  for (let i = begin; i < (begin + end); i++) {
    res += str[i];
  }
  return res;
};

export default substr;
*/

/*
Решение artemprovornyi
// BEGIN (write your solution here)
const substr = (str, start = 0, length = str.length) => {
  let lastIndex = length < 0 ? 1 : length;
  const startIndex = start < 0 ? 0 : start;
  const finalIndex = lastIndex + startIndex - 1;

  if (startIndex > str.length - 1) return '';
  if (finalIndex > str.length) lastIndex = str.length;

  let result = '';
  let i = startIndex;
  const isEndOfLine = lastIndex > str.length - startIndex;
  while (isEndOfLine ? result.length < lastIndex - 1 : result.length < lastIndex) {
    result += str[i];
    i += 1;
  }

  return result;
};

export default substr;
// END
*/

/*

*/

/*

*/

/*

*/
