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

const showWarning = (field) => {
  // LexicalEnvironment = { field: 'email' }
  const warning = `verify your ${field}, please`;
  // LexicalEnvironment = { warning: 'verify your email, please', field: 'email' }
  console.log(warning);
};

/*

Решение учителя

export default (str) => {
  const lastIndex = str.length - 1;
  // BEGIN
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);
  };
  // END
  return iter(0, '');
};


*/

/*
Решение unin51f-shepard

export default (str) => {
 const lastIndex = str.length - 1;
 // BEGIN (write your solution here)
 const iter = (cnt, acc) => {
   if (cnt > lastIndex) {
     return acc;
   }
   return iter(cnt + 1, acc + str[lastIndex - cnt]);
 }
 // END
 return iter(0, '');
*/

/*

Решение tskano

export default (str) => {
  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
   const iter = (counter, acc) => {
    if (str[counter] === undefined) {
      return acc;
    }
    return iter(counter + 1, str[counter]+ acc);
    }
  // END
  return iter(0, '');
};


*/

/*

Решение newta

export default (str) => {
  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (i, acc) => {
    while ( i <= lastIndex ) {
       acc = acc + str[lastIndex - i]
       i++;
    } return acc;
  }
  // END
  return iter(0, '');
};


*/

/*

*/
