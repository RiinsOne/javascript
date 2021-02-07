const h1 = document.querySelector('h1')
h1  // <h1 class="header">
h1.innerText  // "My Webpage"

const ul = document.querySelector('ul')
ul.innerText
// "First thing
// Second thing
// Third thing"

document.body.innerText  // весь текст в теге body

h1.innerText = 'I am hungry!'  // заменит h1 тег на новый текст
ul.innerText = 'I am a bit UL'  // удалит все встроенные теги li и вставит только указанный текст

const p = document.querySelector('#main')
p.innerText  // вернет только текст, за исключением текста, которые "display: none"
p.textContent  // вернет весь текст в том виде, в каком текст указан в .html, а также текст встроенного скрипта
