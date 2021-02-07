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

document.write('hello, world!');
const str1 = 'they call him "Harry"';
const str2 = "they call him 'Harry'";
const str3 = 'call me \'ziggy\' now'; // экранировать через \
const str4 = 'This is a backslash \\';
// \t - tab, \n - new line

ogDoubleBr();
const greet = str => 'Well hello, ' + str; // eslint-disable-line
document.write(greet('Sherlock'));

ogDoubleBr();
const skip = (str) => {
  let i = 0;
  let result = '';

  while (i < str.length) {
    result = result + str[i];
    i = i + 2;
  }
  return result;
};
ogWrite(skip('cats'));

const anotherStr = 'hello';
anotherStr.toUpperCase(); // HELLO
console.log(anotherStr); // hello
ogBr();
ogWrite(anotherStr.toUpperCase());

ogBr();
anotherStr[0].toUpperCase(); // H
ogWrite(anotherStr[0].toUpperCase());

ogBr();
anotherStr[0] = 'W';
ogWrite(anotherStr); // hello


// лучше использовать интерполяцию, для этого нужны backticks (тильда ``)
ogDoubleBr();
const name = 'Orkhan';
const a = 30;
const b = 1;
ogWrite(`His name is ${name} and his age is ${a + b}`);
// Интерполяция предпочтительнее конкатенации

ogDoubleBr();
const reverse = (myString) => {
  let i = myString.length - 1;
  let result = '';

  while (i >= 0) {
    result = result + myString[i];
    i = i - 1;
  }
  return result;
};
ogWrite(reverse('hello, world!'));


//
