let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];
console.log(ingredients.includes('fish'));  // false
console.log(ingredients.includes('shrimp'));  // true

console.log(ingredients.includes('water', 3));  // false
console.log(ingredients.includes('water', 0));  // true

if (ingredients.includes('flour')) {
    console.log('I AM GLUTEN FREE, I CANNOT EAT THAT')
};

console.log(ingredients.indexOf('eel'));  // 6
console.log(ingredients.indexOf('syrup'));  // -1 (значит ничего не найдено)

console.log(ingredients.indexOf('cheese', 5));  // -1
console.log(ingredients.indexOf('cheese', 1));  // 3

if (ingredients.indexOf('flour') !== -1) {
    console.log('There is flour in the ingredients list')
}
