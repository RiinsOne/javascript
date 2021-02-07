const line = () => console.log('--------------------');

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

console.log(prices.sort());
// [ 12, 3000, 35.99, 400.5, 9500, 99.99 ]

const ascSort = prices.sort((a, b) => a - b);
console.log(ascSort);  // [ 12, 35.99, 99.99, 400.5, 3000, 9500 ]

// метод изменяет все списки, prices, ascSort и т.д.
// mutable
const descSort = prices.sort((x, y) => y - x);
console.log(descSort);  // [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]
console.log(ascSort);  // [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]
console.log(prices);  // [ 9500, 3000, 400.5, 99.99, 35.99, 12 ]

// метод slice() позволит скопировать массив в новую переменную
const ascSort2 = prices.slice().sort((a, b) => a - b);
console.log(ascSort2);

line();

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

books.sort((a, b) => b.rating - a.rating);
console.log(books);
