const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num) {
    return num * 2;
});
console.log(doubles);

const numDetail = numbers.map(function(n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});
console.log(numDetail);

const upperWords = words.map(function(word) {
    return word.toUpperCase().split('').join('.');
});
console.log(upperWords);

console.log('-----');

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

const booksTitles = books.map(function(b) {
    return b.title;
});
console.log(booksTitles);
