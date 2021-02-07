let msg = 'you are so grounded mr';
console.log(msg.toUpperCase());  // YOU ARE SO GROUNDED MR
console.log(msg);  // you are so grounded mr

msg = msg.toUpperCase();
console.log(msg);  // YOU ARE SO GROUNDED MR

console.log(msg.toLowerCase());  // you are so grounded mr

let color = "   purple             ";
console.log(color.trim());  // purple, .trim() method removes spaces from start and end
console.log(color.trim().toUpperCase());  // PURPLE


let tvShow = 'catdog';

console.log(tvShow.indexOf('cat'));  // 0
console.log(tvShow.indexOf('dog'));  // 3
console.log(tvShow.indexOf('z'));  // -1 (not found)

console.log('baseball'.indexOf('ball'));  // 4
console.log('baseball'.indexOf('b'));  // 0
console.log('Baseball'.indexOf('b'));  // 4


console.log('Baseball'.slice(4));  // ball
let sport = 'Baseball';
console.log(sport.slice(0, 1));  // B
console.log(sport.slice(3));  // eball

console.log('$50.60'.slice(1)); // 50.60


let msgTwo = 'baseball is entertaining';
console.log(msgTwo.replace('entertaining', 'ok'));  // baseball is ok
console.log('ha ha ha'.replace('ha', 'he'));  // he ha ha, only replaced the first one