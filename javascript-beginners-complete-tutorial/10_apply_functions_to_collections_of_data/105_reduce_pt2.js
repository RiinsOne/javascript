let grades = [89, 96, 58, 77, 99, 21];

const topScore = grades.reduce((max, currVal) => currVal > max ? currVal : max);
console.log(topScore);  // 99

const topScore2 = grades.reduce((max, currVal) => (
    Math.max(max, currVal)
));
console.log(topScore2);  // 99

// const minGrade = grades.reduce((min, val) => val > min ? min : val);
const minGrade = grades.reduce((min, val) => min < val ? min : val);
console.log(minGrade);  // 21

console.log('-----');

// reduce и первоначальное значение
const sum1 = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
});
console.log(sum1);  // 150

// начать с 1000
const sum2 = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal;
}, 1000);
console.log(sum2);  // 1150
