const log = argument => console.log(argument);

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
log(letters.reverse());  // возвращает массив в обратном порядке и также изменяет массив
/*
[
'R', 'E', 'S',
'P', 'E', 'C',
'T'
]
*/
log(letters);  // letters также в обратном порядке

letters.reverse();
log(letters);
log(letters.join());  // 'T,C,E,P,S,E,R' - объединяет все элементы массива в строку, разделитель по умолчанию запятая ','
let joinedLetters = letters.join();
log(typeof joinedLetters);  // string
log(letters.join('---'));  // 'T---C---E---P---S---E---R'

let reversedJoinedLetters = letters.reverse().join('.');
log(reversedJoinedLetters);  // 'R.E.S.P.E.C.T'

log([12.3, 60, false].join()); // '12.3,60,false'
log([null,undefined].join());  // ','

log([12.3, 60, false].join(' # -> '));  // '12.3 # -> 60 # -> false'
