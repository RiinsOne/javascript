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


// const sum2 = a => b => c => a + b + c;

/*
const sum2 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
*/


/*
const sum = a => b => c => a + b + c;
const sum1 = sum(10); // sum1 = b => c => 10 + b + c
const sum2 = sum1(3); // sum2 = c => 10 + 3 + c
const result = sum2(0); // result = 10 + 3 + 0
console.log(result); // 13

sum(10)(3)(0)
*/


/*
const getAverageSalary = job => country => // body //

const salary1 = getAverageSalary('programmer')('spain');
const salary2 = getAverageSalary('programmer')('russia');
const salary3 = getAverageSalary('programmer')('usa');

const getProgrammersSalaryByCountry = getAverageSalary('programmer');

const salary1 = getProgrammersSalaryByCountry('spain');
const salary2 = getProgrammersSalaryByCountry('russia');
const salary3 = getProgrammersSalaryByCountry('usa');
*/




//
// BEGIN
export const True = x => () => x;
export const False = () => y => y;

export const If = f => f;
// END

//

/*

Решение denisgrabina

const True = a => b => a;
const False = a => b => b;
const If = func => a => b => func(a)(b);

export {If, True, False};


*/

/*

Решение ivan_k

// BEGIN (write your solution here)
export const True = a => b => a;
export const False = a => b => b;
export const If = fn => a => b => fn(a)(b);

// END


*/

/*

*/

/*

*/




//
