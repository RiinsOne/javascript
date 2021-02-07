const line = () => console.log('--------------------');
line();

const words = ["dog", "dig", "log", "bag", "wag"];

const all3Lets = words.every(word => word.length === 3);
console.log(all3Lets);
// true - если все элементы массива имеют длину 3
// false - если хотя бы один элемент массива не имеет длину 3

const allEndInG = words.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
});
console.log(allEndInG);  // true

line();

const someStartWithD = words.some(word => word[0] === 'd');
console.log(someStartWithD);  // true
