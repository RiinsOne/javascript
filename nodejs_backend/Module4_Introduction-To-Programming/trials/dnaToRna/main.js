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

const toLowerCase = n => n.toLowerCase();
const toUpperCase = n => n.toUpperCase();

/*
ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
Подсказки
Длина строки str находится так: str.length
*/

const length = n => n.length;

const dnaToRna = (dnaStr) => {
  // const dnaStr = toUpperCase(str);
  let rnaStr = '';
  for (let i = 0; i < length(dnaStr); i += 1) {
    if (dnaStr[i] === 'G') {
      rnaStr += 'C';
    } else if (dnaStr[i] === 'C') {
      rnaStr += 'G';
    } else if (dnaStr[i] === 'T') {
      rnaStr += 'A';
    } else if (dnaStr[i] === 'A') {
      rnaStr += 'U';
    } else if (dnaStr === '') {
      return dnaStr;
    } else return null;
  }
  return rnaStr;
};

print(dnaToRna('ACGTGGTCTTAA'));
print(dnaToRna('CCGTA'));
print(dnaToRna(''));
print(dnaToRna('ACNTG'));
print(dnaToRna('SDDADS'));
print(dnaToRna('GTCCGTAG'));
print(dnaToRna('12313'));

//
