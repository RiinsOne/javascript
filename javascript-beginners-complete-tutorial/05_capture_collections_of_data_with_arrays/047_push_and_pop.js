const log = argument => console.log(argument);

let topSongs = [
    'First Time Ever I Saw Your Face',
    'God Only Knows',
    'A Day In The Life',
    'Life On Mars'
];

topSongs.push('Fortunate Son');  // Добавляет элемент в конец массива
log(topSongs);

topSongs.push(true);
log(topSongs);  // [..., true]

topSongs.pop();  // Удаляет последний элемент из массива
log(topSongs);

const nextSong = topSongs.pop();
log(nextSong);  // Fortunate Son
log(topSongs);  // Массив из 4
