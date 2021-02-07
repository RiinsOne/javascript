const log = argument => console.log(argument);

const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];

log(animalPairs[2][0]);  // peahen
log(animalPairs[1][1]);  // ram

animalPairs[0][1] = 'stag';
log(animalPairs);  // [ [ 'doe', 'stag' ], [ 'ewe', 'ram' ], [ 'peahen', 'peacock' ] ]
