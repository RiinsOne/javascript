const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
};
console.log(dog);
// { family: 'Caninae', furry: true, isPet: true, adorable: true }

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
};
console.log(houseCat);
// {
// legs: 4,
// family: 'Felidae',
// isGrumpy: true,
// personality: 'unpredictable'
// }

const catDog = {
    ...canine,
    ...feline,
}
console.log(catDog);
// { family: 'Felidae', furry: true, legs: 4 }


const spread1 = {...[4, 5, 6]};
console.log(spread1);  // { '0': 4, '1': 5, '2': 6 }

const random = [...'hello', {
    ...catDog
}];
console.log(random);
// [
// 'h',
// 'e',
// 'l',
// 'l',
// 'o',
// { family: 'Felidae', furry: true, legs: 4 }
// ]
