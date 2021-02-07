const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
};

function print(person) {
    const {first, last, title} = person;
    console.log(`${first} ${last}, ${title}`);
}

print(runner);
// Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

// второй способ
function print2({first, last, title}) {
    console.log(`${first} ${last}, ${title}`);
}
print2(runner);
// Eliud Kipchoge, Elder of the Order of the Golden Heart of Kenya

console.log('---------------');

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`);
}
parseResponse(response);  // Status: 200 OK
