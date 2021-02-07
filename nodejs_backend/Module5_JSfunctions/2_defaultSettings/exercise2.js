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

const len = n => n.length;

const substr = (myStr, startIndex, lenIndex) => {
  const intMyStrLength = len(myStr) - 1;

  let result = '';

  let newStartIndex;
  switch (true) {
    case startIndex < 0:
      newStartIndex = 0;
      break;
    case startIndex > intMyStrLength:
      newStartIndex = 'empty';
      break;
    default:
      newStartIndex = startIndex;
  }

  let newLenIndex;
  switch (true) {
    case lenIndex < 0:
      newLenIndex = 1;
      break;
    case lenIndex > intMyStrLength:
      newLenIndex = intMyStrLength + 1;
      break;
    case lenIndex === 0:
      newLenIndex = 'empty';
      break;
    default:
      newLenIndex = lenIndex;
  }

  if (newStartIndex === 'empty' || newLenIndex === 'empty') return result;
  if (startIndex === undefined || lenIndex === undefined) result += myStr;

  for (let i = newStartIndex; i < newLenIndex; i += 1) {
    result += myStr[i];
  }
  return result;
};
