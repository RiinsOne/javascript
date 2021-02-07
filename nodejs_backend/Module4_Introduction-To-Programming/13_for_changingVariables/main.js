function ogBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function ogDoubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

function ogWrite(n) { // eslint-disable-line no-unused-vars
  document.write(n);
}

/*
const factorial = (n) => {
  let counter = 1;
  let result = 1;

  while (counter <= n) {
    result *= counter;
    counter += 1;
  }
  return result;
};
*/

const factoria = (n) => {
  let result = 1;

  for (let counter = 1; counter <= n; counter += 1) {
    result *= counter;
  }
  return result;
};

/*
// используем if
let answer;

if (num === 1) {
  answer = 'One';
} else if (num === 2) {
  answer = 'Two';
} else {
  answer = 'Nothing';
}
*/

/*
// используем switch
switch(num) {
  case 1:  // if (num === 1)
    answer = "One";
    break;

  case 2:  // if (num === 2)
    answer = "Two";
    break;

  default:
    answer = "Nothing";
    break;
}
*/

/* break также можно использовать
 в циклах for для мгновенного выхода из цикла
*/


/*
// Несколько значений case можно группировать
switch(num) {
  case 1:  // if (num === 1)
    answer = "One";
    break;

  case 2:  // if (num === 2)
  case 3:  // if (num === 3)
  case 4:  // if (num === 4)
    answer = "Two to four";
    break;

  default:
    answer = "Nothing";
    break;
}
*/

let b = 10;
b += b ** 2 > 20 ? 1 : 10;
ogWrite(b);

ogDoubleBr();
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};




//
