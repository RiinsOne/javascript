const log = argument => console.log(argument);

const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'forty five'
}
log(fitBitData.totalMiles);  // 211.7
// доступ к значениям в словаре через точку после имени переменной
// log(fitBitData.45);  // SyntaxError

let data = {a: 1, b: 2, }
log(data);
