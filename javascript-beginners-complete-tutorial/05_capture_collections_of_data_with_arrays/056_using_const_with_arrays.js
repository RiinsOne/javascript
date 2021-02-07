const log = argument => console.log(argument);

const city = 'Napoli'

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green';
log(myEggs);  // [ 'green', 'brown', 'purple' ]
// const массив можно изменять контент внутри с помощью методов и свойств, но нельзя переназначить сам массив
// myEggs = ['blue', 'pink'];  //TypeError
