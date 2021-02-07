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

// conversions
let c2i = x => x(y => y + 1, 0)
let c2star = x => x(y => y + '*', '')
let c2b = x => x('True', 'False')
let c2a = xs => xs((y, ys) => [c2i(y)].concat(ys), [])

// numbers
let zero = (s,z) => z
let one = (s,z) => s(z)
let two = (s,z) => s(s(z))
let three = (s,z) => s(s(s(z)))

//
