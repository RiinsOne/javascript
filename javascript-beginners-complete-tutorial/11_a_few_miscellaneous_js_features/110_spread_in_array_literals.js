const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
console.log(mollusca);
// [
// 'dumbo octopus',
// 'humboldt squid',
// 'flamboyant cuttlefish',
// 'giant african snail',
// 'banana slug',
// 'variable neon slug'
// ]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
console.log(inverts);
// [
// 'fire coral',
// 'moon jelly',
// 'giant african snail',
// 'banana slug',
// 'variable neon slug',
// 'dumbo octopus',
// 'humboldt squid',
// 'flamboyant cuttlefish'
// ]

const cephCopy = [...cephalopods];
console.log(cephCopy === cephalopods);  // false

// "abcdefg".split('')
// or
// [...'abcdefg']
