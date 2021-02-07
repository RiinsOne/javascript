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

const length = n => n.length;
const toUpperCase = n => n.toUpperCase();

ogWrite(length('hello'));
ogWrite(toUpperCase('hello'));


const solution = (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    if (i === 0) {
      result += toUpperCase(str[i]);
      // ogWrite(result);
    } else if (str[i - 1] === ' ') {
      result += toUpperCase(str[i]);
      // ogWrite(result)
    } else {
      result += str[i];
      // ogWrite(result);
    }
  }

  return result;
};

ogWrite(solution('hi there man'));



/*



const surfaceAreaCalculator = (radius) => {
  return 4 * 3.14 * square(radius);
}

// surfaceAreaCalculator это детерминированная функция

Math.random(); // Недетерминированная функция




*/



//
