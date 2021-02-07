/*
Решение учителя
// BEGIN
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
// END
*/

/*
Решение hightower
// BEGIN (write your solution here)
export default (num) => {
  for (let i = 0; i <= num ; i += 1) {
    if (3 ** i === num) {
      return true;
    }

  }
  return false;
}
// END
*/

/*
Решение holiqen
// BEGIN (write your solution here)
const isPowerOfThree = (n) => {
  if (n === 0) {
    return false;
  } if (n === 1) {
    return true;
  } if (n % 3 === 0) {
    return isPowerOfThree(n / 3);
  }
  return false;
};

export default isPowerOfThree;
// END
*/

/*

*/

/*

*/
