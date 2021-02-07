function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) {
        return false;
    }
    if (password.toLowerCase().indexOf(username) !== -1) {
        return false;
    }
    return true;
}

console.log(isValidPassword('chickenpassword', 'ogasanov'));

function isValidPasswordTwo(password, username) {
    if (
        (password.length < 8) ||
        (password.indexOf(' ') !== -1) || (password.toLowerCase().indexOf(username) !== -1)
    ) {
        return false;
    }
    return true;
}

console.log(isValidPasswordTwo('onetwothree45', 'orkhan'));

function isValidPasswordThree(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.toLowerCase().indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true
}

console.log(isValidPasswordThree('somepassword with space', 'orkhan'));

function isValidPasswordFour(password, username) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.toLowerCase().indexOf(username) !== -1;
    return !tooShort && !hasSpace && !tooSimilar;
}

console.log(isValidPasswordFour('password with space', 'orkhan'));
