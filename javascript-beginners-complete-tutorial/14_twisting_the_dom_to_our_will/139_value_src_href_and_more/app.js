const inputs = document.querySelectorAll('input')
inputs[0].value  // "Bubba"
inputs[2].checked  // false - checkbox
inputs[0].value += 'the bear'  // "Bubbathe bear"
inputs[3].value  // "300" - форма ползунок
inputs[3].value  // "186"
inputs[1].placeholder = 'please enter your password'  // "please enter your password" - заменит текст в placeholder указанной формы

const a = document.querySelector('a')
a.href  // "https://cats.com/cute"
a.href = 'http://google.com'  // "http://google.com"
