const log = argument => console.log(argument);

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
log(colors[0]);  // red
log(colors[3]);  // green
log(colors[7]);  // undefined
log(colors.length);  // 7
log(colors.length-1);  // 6
log(colors[colors.length-1]);  // violet
