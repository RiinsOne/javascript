/* eslint-disable default-case */
/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
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

const make = (a, b, c) => (message) => {
  switch (message) {
    case 'get1':
      return a;
    case 'get2':
      return b;
    case 'get3':
      return c;
  }
};

const triple = make(3, 5, 'hi there');

const get1 = triple => triple('get1');
const get2 = triple => triple('get2');
const get3 = triple => triple('get3');

print(get1(triple));
print(get2(triple));
print(get3(triple));

//
