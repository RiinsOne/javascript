const log = argument => console.log(argument);

log(parseInt('24'));  // 24
log(parseInt('24.987'));  // 24
log(parseInt('28dayslater'));  // 28

log('-----');

log(parseFloat('24.987'));  // 24.987
log(parseFloat('7'));  // 7
log(parseFloat('I ate 3 shramp'));  // NaN

log('-----');

log(parseInt('22') + 1);  // 23
log(parseInt('$99'));  // NaN
log(parseInt('sometextbefore99'));  // NaN
