const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// const team = {};
// team[role] = person;
// console.log(team);  // { host: 'Jools Holland' }
//
// team[role2] = person2;
// console.log(team);
// { host: 'Jools Holland', Director: 'James Cameron' }


// второй способ, динамический
const team = {
    [role]: person,
    [role2]: person,
    [1 + 6 + 9]: 'sixteen',
};
console.log(team);
// { '16': 'sixteen', host: 'Jools Holland', Director: 'Jools Holland' }

function addProp(obj, k , v) {
    const copy = {...obj};
    copy[k] = v;
    return copy;
}

const res = addProp(team, 'happy', ':)');
console.log(res);
// {
// '16': 'sixteen',
// host: 'Jools Holland',
// Director: 'Jools Holland',
// happy: ':)'
// }

// computed properties
const addProp2 = (obj, k, v) => {
    return {
        ...obj,
        [k]: v
    }
}
const res2 = addProp(team, 'saddy', ':(');
console.log(res2);
// {
// '16': 'sixteen',
// host: 'Jools Holland',
// Director: 'Jools Holland',
// saddy: ':('
// }

// one line arrow function
const addProp3 = (obj, k ,v) => ({...obj, [k]: v})
const res3 = addProp(team, 'og', 'riins');
console.log(res3);
// {
// '16': 'sixteen',
// host: 'Jools Holland',
// Director: 'Jools Holland',
// og: 'riins'
// }
