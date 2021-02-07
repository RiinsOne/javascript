const person = {
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
    printBio() {
        console.log(this);
        const fullName = this.fullName();
        return `${fullName} is a person!`
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHAH`)
    }
}

const printBio = person.printBio;
// printBio();  // this.fullName is not a function
// person.printBio();
person.laugh();
