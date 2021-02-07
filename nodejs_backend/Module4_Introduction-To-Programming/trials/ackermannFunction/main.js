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

*/

const ackermann = (m, n) => {
  if (m === 0) return n + 1;
  else if (m > 0 && n === 0) return ackermann(m - 1, 1); // можно вместо else if просто if
  else return ackermann(m - 1, ackermann(m, n - 1)); // можно сразу return
};

print(ackermann(0, 0));
print(ackermann(2, 1));
print(ackermann(2, 3));

/*
Решение hightower
// BEGIN (write your solution here)
const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  };
  if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  };
  if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  };
};

export default ackermann;
// END
*/

/*

*/

//
