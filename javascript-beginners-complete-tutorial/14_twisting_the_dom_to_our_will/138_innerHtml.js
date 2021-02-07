const form = document.querySelector('form')
form.innerHTML  // вернет весь встроенный html
// "
//             <input type=\"text\" placeholder=\"Bear Name\">
//             <input type=\"password\" placeholder=\"password\">
//             <input type=\"submit\">
//         "

const ul = document.querySelector('ul')
ul.innerText
// "First thing
// Second thing
// Third thing"

ul.innerHTML
// "
//             <li class=\"special\">First thing</li>
//             <li>Second thing</li>
//             <li class=\"special\">Third thing</li>
//         "

form.innerHTML = 'asdahdasdadad'  // заменит все формы на этот текст
form.innerHTML = '<b>i am a bold tab</b>'  // "<b>i am a bold tab</b>"

const h1 = document.querySelector('h1')
h1.innerHTML  // "My Webpage"
h1.innerHTML += ' is cool'  // "My Webpage is cool"
h1.innerHTML += '<b>!!!!!</b>'  // "My Webpage is cool<b>!!!!!</b>"
h1.innerText += '<b>!!!!!</b>'  // "My Webpage is cool!!!!!<b>!!!!!</b>", т.е. innerText игнорирует теги и вставит всё как текст
