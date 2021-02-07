const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};

// for (let x of movieReviews) {
//     console.log(x);
// }
// TypeError: movieReviews is not iterable

// Object.keys(movieReviews)
// transform to list (array)
console.log(Object.keys(movieReviews));
// [
// 'Arrival',
// 'Alien',
// 'Amelie',
// 'In Bruges',
// 'Amadeus',
// 'Kill Bill',
// 'Little Miss Sunshine',
// 'Coraline'
// ]

// Object.values(movieReviews)
console.log(Object.values(movieReviews));
// [
// 9.5, 9, 8, 9,
// 10, 8, 8.5, 7.5
// ]
console.log('--------------------');

let i = 1;
for (let movie of Object.keys(movieReviews)) {
    console.log(`${i}: ${movie} --- ${movieReviews[movie]}`);
    i += 1;
}
console.log('-----');

const ratings = Object.values(movieReviews);
total = 0;
for (let rating of ratings) {
    total += rating;
}
let averageTotal = total / ratings.length;
console.log(averageTotal);
