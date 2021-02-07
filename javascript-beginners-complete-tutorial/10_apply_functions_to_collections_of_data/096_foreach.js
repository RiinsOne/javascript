const numbers = [20, 21, 22, 23, 24, 25, 26, 27]

// numbers.forEach(function(num) {
//     console.log(num);
// });

function printTriple(n) {
    console.log(n * 3);
}

numbers.forEach(printTriple);

console.log('------');

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }
]

books.forEach(function(book) {
    console.log(book.title.toUpperCase());
});

// for (let book of books) {
//     console.log(book.title.toUpperCase());
// }

console.log('-----');

// Аналог enumerates в Пайтоне
numbers.forEach(function(num, idx) {
    console.log(idx, num);
});
