function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
}

const length = str => str.length;
const substr = (str, start, size) => str.substr(start, size);

const isPalindrome = (string) => {
  if (length(string) <= 1) {
    return true;
  }
  const firstSymbol = string[0];
  const lastSymbol = string[length(string) - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = substr(string, 1, length(string) - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};

/*
// Complexity: 1
const sum = (a, b) => a + b;
sum(1, 3); // => 4

// Complexity: 2
const abs = n => (n >= 0 ? n : -n);

abs(10); // => 10
abs(-3); // => 3
*/

/*
const f = (age, sex) => {
  if (age < 18) {
    return null;
  }

  if (sex === 'male') {
    return 'yes';
  } else if (sex === 'female') {
    return 'no';
  }
}
*/



//
