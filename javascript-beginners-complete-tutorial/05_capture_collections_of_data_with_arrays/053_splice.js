const log = argument => console.log(argument);

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

animals.splice(1, 0, 'octopus');  // вставит на место первого элемента, без удаления, третий аргумент (т.е. между 0 и 1 элементом, как срезы в питоне)
// при выполнении возвращает удаляемые элементы
log(animals);
/*
[
'shark', 'octopus',
'salmon', 'whale',
'bear', 'lizard',
'tortoise'
]
*/

animals.splice(3, 2);  // удалит третий элемент и последующий за ним
log(animals); // [ 'shark', 'octopus', 'salmon', 'lizard', 'tortoise' ]

animals.splice(3, 0, 'snake', 'frog');  // между 2 и 3 элементом вставит аргументы
log(animals);
/*
[
'shark', 'octopus',
'salmon', 'snake',
'frog', 'lizard',
'tortoise'
]
*/

let new_animals = animals.slice();
new_animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');
log(new_animals);
/*
[
'SHARK!', 'OCTOPUS!',
'salmon', 'snake',
'frog', 'lizard',
'tortoise'
]
*/
