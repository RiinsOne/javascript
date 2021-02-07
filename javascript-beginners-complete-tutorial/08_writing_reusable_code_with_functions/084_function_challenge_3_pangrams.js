function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    const allChars = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of allChars) {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}
console.log(isPangram('orkhan'));  // false
console.log(isPangram('The Five boxing wizards jump quickly'));  // true

function isPangramTwo(sentence) {
    let lowerCased = sentence.toLowerCase();
    const allChars = 'abcdefghijklmnopqrstuvwxyz';
    for (let char of allChars) {
        if (!lowerCased.includes(char)) {
            return false;
        }
    }
    return true;
}
console.log(isPangramTwo('some text'));
console.log(isPangramTwo('The Five boXing wizArds jump quicklY'));
