const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
};

const {
    first,
    last,
} = runner;
console.log(first, last);  // Eliud Kipchoge

const {
  country: nation,
  title: honorific
} = runner;
console.log(nation, honorific);
// Kenya Elder of the Order of the Golden Heart of Kenya
// найти значение country и записать её в переменную nation, аналогично с title.

console.log('-----');

const runner2 = {
  first2: "Eliud",
  last2: "Kipchoge",
  country2: "Kenya",
  title2: "Elder of the Order of the Golden Heart of Kenya"
};

const {
  first2,
  last2,
  ...other
} = runner2;
console.log(first2, last2, other);
// Eliud Kipchoge {
// country2: 'Kenya',
// title2: 'Elder of the Order of the Golden Heart of Kenya'
// }
