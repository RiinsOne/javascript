const log = argument => console.log(argument);

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b',
};

const palette2 = palette;
palette2.green = '#ebf876';

log(palette);
log(palette2);
// .green добавится к двум объектам
