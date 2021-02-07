const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]

const [{first: goldWinner}, {country}] = results;
console.log(country);  // Ethiopia
console.log(goldWinner);  // Eliud

// лучший способ разбить по отдельности
const [, silverMedal] = results;
const {country: country2} = silverMedal;
console.log(country2);  // Ethiopia
