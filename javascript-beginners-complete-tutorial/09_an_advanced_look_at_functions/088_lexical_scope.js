function outer() {
    let movie = 'Amadeus';

    function inner() {
        console.log(movie.toUpperCase());
    }
    inner();
}
outer();  // AMADEUS

function outerTwo() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Snining';
        console.log(movie.toUpperCase());
    }
    inner();
}
outerTwo();  // THE SNINING
// если не было б movie в inner, то movie искалось бы в outer

function outerThree() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Snining';

        function extraInner() {
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}
outerThree();  // THE SNINING
// сначала ищется внутри функции, если нету, то выше и т.д.
