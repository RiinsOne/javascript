document.getElementsByTagName('input')
// HTMLCollection { 0: input, 1: input, 2: input, length: 3 } - не массив

document.getElementsByTagName('p')
// HTMLCollection { 0: p, 1: p#main, length: 2, … }

document.getElementsByTagName('h3')
// HTMLCollection { length: 0 }

const inputs = document.getElementsByTagName('input')
inputs[0]  // возвращает объект первого элемента инпут <input type="text" placeholder="Bear Name">

inputs[2]  // <input type="submit">
inputs.length  // 3

for (let input of inputs) {console.log(input)}
// <input type="text" placeholder="Bear Name">
// <input type="password" placeholder="password">
// <input type="submit">

// можно преобразить в массив, через спреды
const arr = [...inputs]
arr  // Array(3) [ input, input, input ]

for (let input of inputs) {console.log(input.value)}
// отобразит информацию в полях формы инпут
