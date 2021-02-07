const person = {
    first: 'Og',
    last: 'Riins',
    nickName: 'Black',
    fullName() {
        console.log(this);
    }
}
console.log(person.fullName());
// this - это получается сам объект, внутри данного скопа
// {
// first: 'Og',
// last: 'Riins',
// nickName: 'Black',
// fullName: [Function: fullName]
// }
// undefined

console.log('-----');

const person2 = {
    first: 'Og',
    last: 'Riins',
    nickName: 'Black',
    fullName() {
        const {
            first,
            last,
            nickName
        } = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    // fullName() {
    //     return `${this.first} ${this.last} AKA ${this.nickName}`;
    // },

    printBio() {
        const fullName = this.fullName();
        return `${fullName} is a person!`
    }

}
console.log(person2.fullName()); // Og Riins AKA Black

person2.nickName = 'BBBBLACK';
console.log(person2);  // nickName: 'BBBBLACK',

console.log('-----');

console.log(person2.printBio());  // Og Riins AKA BBBBLACK is a person!
