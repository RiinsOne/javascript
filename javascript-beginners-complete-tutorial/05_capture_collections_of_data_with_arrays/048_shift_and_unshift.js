const log = argument => console.log(argument);

let dishesToDo = ['big platter'];
dishesToDo.unshift('large plate');  // Добавляет элемент в начало массива
dishesToDo.unshift('small plate');
log(dishesToDo);  // [ 'small plate', 'large plate', 'big platter' ]

dishesToDo.unshift('cereal bowl');
dishesToDo.unshift('mug');
dishesToDo.unshift('dirty spoon');
log(dishesToDo);


log(dishesToDo.shift());  // Удаляет первый элемент массива и возвращает его
log(dishesToDo);  // Первый элемент списка 'Dirty spoon' пропал
dishesToDo.shift();
dishesToDo.shift();
dishesToDo.shift();
dishesToDo.shift();
dishesToDo.shift();
log(dishesToDo);

dishesToDo.unshift('fork', 'knife');
log(dishesToDo);  // [ 'fork', 'knife' ]
dishesToDo.push('board', 'cookie')
log(dishesToDo);  // [ 'fork', 'knife', 'board', 'cookie' ]
