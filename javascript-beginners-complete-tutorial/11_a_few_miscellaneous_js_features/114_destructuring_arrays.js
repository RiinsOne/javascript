const raceResults = [
  'Eliud Kipchoge',
  'Feyisa Lelisa',
  'Galen Rupp',
  'Ghirmay Ghebreslassie',
  'Alphonce Simbu',
  'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

const [gold, silver, bronze] = raceResults;
console.log(gold);  // Eliud Kipchoge
console.log(silver);  // Feyisa Lelisa
console.log(bronze);  // Galen Rupp

const [first, , third] = raceResults;
console.log(first);  // Eliud Kipchoge
console.log(third);  // Galen Rupp
// если нужно пропустить, то через запятые

const [winner, ...others] = raceResults;
console.log(winner);  // Eliud Kipchoge
console.log(others);
// [
// 'Feyisa Lelisa',
// 'Galen Rupp',
// 'Ghirmay Ghebreslassie',
// 'Alphonce Simbu',
// 'Jared Ward'
// ]
