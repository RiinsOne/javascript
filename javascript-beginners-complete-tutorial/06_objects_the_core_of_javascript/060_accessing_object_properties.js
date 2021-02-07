const log = argument => console.log(argument);

const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '15': 'fifteen',
    'value': 'some value',
    '76 trombones': 'great song!',
};
// log(numbers.100);  // doesn't work
log(numbers[100]);  // one hundred
log(numbers[16]);  // sixteen
// доступ к цифровым значениям словаря через квадратные скобки [], как в массивах/списках

log(numbers['15']);  // fifteen
log(numbers['value']);  // some value
log(numbers.value);  // some value
// доступ к значениям ключам словаря можно также через квадратные скобки []

log('-----');

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
};

log(palette.blue);
log(palette['yellow']);

let mysteryColor = 'yellow';
log(palette[mysteryColor]);  // #f9ca24
// можно вызвать mysteryColor без ковычек и покажет значения ключа 'yellow'
log(palette['bl'+'ue']);  // #30336b
