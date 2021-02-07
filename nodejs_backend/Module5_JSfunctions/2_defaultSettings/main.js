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

const greeting = name => print(`Hi, ${name}!`);
greeting('John');
greeting();

const foo = (a, b, c) => {
  const output = `a - ${a}; b - ${b}; c - ${c}`;
  print(output);
};
foo('I', 'am', 'here');
foo('I', 'am');
foo('I');
foo();

const greeting2 = name => print(`Hi, ${name ? name : 'anonymous'}!`); // eslint-disable-line
greeting2();

const greeting3 = (name = 'anonymous') => print(`Hi, ${name}!`);
greeting3();

const pow = (base, exp = 2) => base ** exp;
print(pow(5));
print(pow(5, 3));
print(pow(5, 1));

/*

*/



//
