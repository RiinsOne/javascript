/*
Решение учителя
// BEGIN
export default (n) => {
  let rna = '';
  for (let i = 0; i < n.length; i += 1) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        return null;
    }
  }

  return rna;
};
// END
*/



/*
// BEGIN (write your solution here)
const dnaToRna = (str) => {
  const upperWord = str.toUpperCase();
  let result = '';
  for (let i = 0; i < upperWord.length; i += 1) {
    switch (upperWord[i]) {
      case 'G': {
        result += 'C';
        break; }
      case 'C': {
        result += 'G';
        break; }
      case 'T': {
        result += 'A';
        break; }
      case 'A': {
        result += 'U';
        break; }
      case '': {
        result = '';
        break; }
      default: {
        return result = null;
      }
    }
  } return result;
};

*/


/*
Решение bondiano
// BEGIN (write your solution here)
const DNAToRNA = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export default (dna) => {
  let rna = '';

  for (const nucleoid of dna) {
    if (DNAToRNA[nucleoid]) {
      rna += DNAToRNA[nucleoid];
    } else {
      return null;
    }
  }

  return rna;
};
// END
*/

/*
Решение khannanova
// BEGIN (write your solution here)
export default (dna) => {
  if (dna === '') return '';
  let rnk = '';
  for (let i = 0; i < dna.length; i += 1) {
    if (dna[i] === 'G') {
      rnk += 'C';
    } else if (dna[i] === 'C') {
      rnk += 'G';
    } else if (dna[i] === 'T') {
      rnk += 'A';
    } else if (dna[i] === 'A') {
      rnk += 'U';
    } else return null;
  }

  return rnk;
};
// END
*/

/*

*/
