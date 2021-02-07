function ogBr() {
  document.write('<br>');
}

function ogDoubleBr() {
  document.write('<br>');
  document.write('<br>');
}

/*
const abs = (num) => {
  if (num > 0) {
    return num;
  } else if (num < 0) {
    return num;
  } else {
    return 0;
  }
};
*/

// код ниже тоже самое, что и выше, но в упрощенной форме
const abs = (num) => {
  if (num > 0) {
    return num;
  } if (num < 0) {
    return num;
  }
  return 0;
};

document.write(abs(-15));
console.log(abs(-15));

ogDoubleBr();

/*
const absNew = (newNum) => {
  if (newNum === 0 || newNum > 0) {
    return newNum;
  } else {
    return newNum;
  }
};
*/

const absNew = (newNum) => {
  if (newNum === 0 || newNum > 0) {
    return newNum;
  }
  return newNum;
};

document.write(absNew(-25));
console.log(absNew(-33));

ogBr();
const x = -15;
const absValue = (x === 0 || x > 0) ? x : x; // это инструкция, она выполняет действие
document.write(absValue);

ogDoubleBr();
const num = -32;
const firstValue = (num >= 0) ? num : num;
// if мы так реализовать не можем, будет ошибка. Так как if не является выражением.
document.write(firstValue);

/*
let secondValue;
if (secondNum >= 0) {
  secondValue = secondNum;
} else {
  secondValue = secondNum;
};
*/

/*
const getAbs = (getNum) => {
  if (getNum >= 0) {
    return getNum;
  }
  return getNum;
};
// код ниже намного проще и лучше, чем этот
*/
ogDoubleBr();
const getAbs = getNum => ((getNum >= 0) ? getNum : getNum); // код однострочка, тоже самое что и выше
document.write(getAbs(-25));


// вложенные тернарные операции
ogBr();
const numTwo = -11;
const typeOne = (numTwo > 0) ? 'positive' : (numTwo < 0) ? 'negative' : 'zero';
// вложенные тернарные операции желательно не использовать, если надо выполнить несколько строчек кода
document.write(typeOne);


ogDoubleBr();
const finalGrade = (exam, projects) => {
  if (exam > 90 || projects > 10) {
    return 100;
  } if (exam > 75 && projects >= 5) {
    return 90;
  } if (exam > 50 && projects >= 2) {
    return 75;
  }
  return 0;
};

document.write(finalGrade(100, 12));
ogBr();
document.write(finalGrade(99, 0));
ogBr();
document.write(finalGrade(10, 15));
ogBr();
document.write(finalGrade(85, 5));
ogBr();
document.write(finalGrade(55, 3));
ogBr();
document.write(finalGrade(55, 0));
ogBr();
document.write(finalGrade(20, 2));
ogBr();

//
