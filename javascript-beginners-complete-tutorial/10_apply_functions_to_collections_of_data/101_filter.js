const nums = [34, 35, 67, 54, 109, 102, 32, 9]

const odds = nums.filter(n => n % 2 === 1);
console.log(odds);  // [ 35, 67, 109, 9 ]
// вернет только значения true, в нашем случае нечетные числа

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);  // [ 34, 54, 102, 32 ]

const bigNums = nums.filter(n => n > 50);
console.log(bigNums);  // [ 67, 54, 109, 102 ]

console.log("----");

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


const goodBooks = books.filter(b => b.rating > 4.3);
console.log(goodBooks);

console.log('----------');

const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
));
console.log(fantasyBooks);

console.log('----------');

const shortForm = books.filter(b => (
    b.genres.includes('short stories') ||
    b.genres.includes('essays')
));
console.log(shortForm);

console.log('----------');

const query = 'Bone';
const result = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
});
console.log(result);
