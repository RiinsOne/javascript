const log = argument => console.log(argument);

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

let swimmers = animals.slice(0, 3);
log(swimmers);  // [ 'shark', 'salmon', 'whale' ]
// .slice(0, 3) - срез элементов массивов включая первый индекс и не включая второй.

let mammals = animals.slice(2, 4);
log(mammals);  // [ 'whale', 'bear' ]

let reptiles = animals.slice(4, 6);
log(reptiles);  // [ 'lizard', 'tortoise' ]
// или можно не указывать второй аргумент, тогда срез будет до последнего элемента
log(animals.slice(4));  // [ 'lizard', 'tortoise' ]

log(animals.slice(-3));  // [ 'bear', 'lizard', 'tortoise' ] - last 3 elements
log(animals.slice(-3, -1));  // [ 'bear', 'lizard' ]
log(animals.slice());  // [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ] - скопирует массив
