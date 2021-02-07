/*
Решение учителя
// BEGIN
const reverse = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse(str.substr(0, len - 1));
};

export default reverse;
// END
*/

/*
Решение corsicanec82
// BEGIN (write your solution here)
const reverseString = (strInput) => {
  const iterReverseString = (acc, str) => {
    if (str.length === 0) {
      return acc;
    }
    return iterReverseString(acc + str[str.length - 1], str.substr(0, str.length - 1));
  };

  return iterReverseString('', strInput);
};

export default reverseString;
// END
*/

/*
Решение unin51f-shepard
// BEGIN (write your solution here)
const reverse = (str) => {
  if (str.length === 1) {
    return str;
  }
  let result = '';
  for (let i = str.length -1; i >= 0; i -= 1) {
    result += str.substr(i, 1);
    console.log(result);
  }
  return result;

}
// END

export default reverse;
*/

/*
Решение tskano
// BEGIN (write your solution here)
const reverse = (str) => {
  if (str.length < 2) {
    return str;
  } else {
    const first =  str.substr( 0, 1);
    const rest = str.substr(1, str.length - 1);
    return reverse(rest) + first;
  };
};
export default reverse;
// END
*/
