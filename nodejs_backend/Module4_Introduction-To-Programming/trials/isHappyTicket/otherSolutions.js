/*
// BEGIN
export default (_num) => {
  const num = String(_num);
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};
// END
*/

/*
Решение unin51f-shepard
// BEGIN (write your solution here)
const isHappyTicket = (x) => {
  let tik = String(x);
  let sumleft = 0;
  let sumright = 0;
  for (let i = 0; i < 3; i += 1) {
    sumleft += Number(tik[i]);
  }
  for (let i = 3; i < 6; i += 1) {
    sumright += Number(tik[i]);
  }
return sumleft === sumright;
}
// END

export default isHappyTicket;
*/

/*
Решение hightower
// BEGIN (write your solution here)
export default (num) => {
  num = String(num);
  if (num.length % 2 !== 0 || num.length < 2) {
    return 'error';
  }

  let firstNum = 0;
  let secondNum = 0;

  for ( let i = 0 ; i < num.length ; i += 1) {
    (i <= num.length / 2 - 1) ? firstNum += Number(num[i]) : secondNum += Number(num[i]);
  }

  return firstNum === secondNum;

}
// END
*/

/*
Решение durilka
// BEGIN (write your solution here)
const isHappyTicket = (num) => {
  const numberStr = num === String(num) ? num : String(num);
  let numberFirst = 0;
  let numberSecond = 0;
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i <= 2) {
      numberFirst += Number(numberStr[i]);
    } else {
      numberSecond += Number(numberStr[i]);
    }
  }
  return numberFirst === numberSecond;
};
export default isHappyTicket;
// END
*/
