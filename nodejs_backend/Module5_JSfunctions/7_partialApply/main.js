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
const sum = (a, b, c) => a + b + c;

// Берем исходную функцию sum и отдаем ее в функцию partialApply
const sumWithFour = partialApply(sum, 4);
sumWithFour(3, 1); // 8
sumWithFour(10, 3); // 17

const sumWithFourAndTwo = partialApply(sumWithFour, 2);
sumWithFourAndTwo(3); // 9
*/


/*
const partialApply = (fn, arg1) => (arg2, arg3) => fn(arg1, arg2, arg3);
*/

/*
const salary1 = getAverageSalary('programmer', 'spain');
const salary2 = getAverageSalary('programmer', 'russia');
const salary3 = getAverageSalary('programmer', 'usa');

const job = 'programmer'
const salary1 = getAverageSalary(job, 'spain');
const salary2 = getAverageSalary(job, 'russia');
const salary3 = getAverageSalary(job, 'usa');

const getProgrammersSalaryByCountry = partialApply(getAverageSalary, 'programmer');

const salary1 = getProgrammersSalaryByCountry('spain');
const salary2 = getProgrammersSalaryByCountry('russia');
const salary3 = getProgrammersSalaryByCountry('usa');


const getProgrammersSalaryByCountry = country => getAverageSalary('programmer', country);
*/

/*
const partialApply = (fn, arg1) => arg2 => fn(arg1, arg2);
*/


//

// BEGIN
export default (f, second) => first => f(first, second);
// END


//
