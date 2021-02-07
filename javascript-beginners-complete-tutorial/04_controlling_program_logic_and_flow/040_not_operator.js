console.log(!'');  // true

let loggedInUser;

if (!loggedInUser) {
    console.log('Get out of here!');
}

let flavor = 'watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log("We don't have that flavor!");
}

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log("We don't have that flavor!!!");
}
