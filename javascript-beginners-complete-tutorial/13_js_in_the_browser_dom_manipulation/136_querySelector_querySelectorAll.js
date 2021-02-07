// document.querySelector() может заменить byTagName, byClassName, byId

document.querySelector('h1')  // tag
// <h1 class="header">

document.querySelector('p')  // tag
// <p> - вернет первый <p>

document.querySelector('input')  // tag
// <input type="text" placeholder="Bear Name"> - вернет первый инпут

document.querySelector('#bear-photo')  // id через решетку - #
// <img id="bear-photo" src="https://miro.medium.com/…-6aYaf_Bes1E3Imhc0A.jpeg" alt="">

const main1 = document.querySelector('#main')
const main2 = document.getElementById('main')
// main1, main2 - <prototype>: HTMLParagraphElementPrototype { align: Getter & Setter, … }

document.querySelector('.special')  // class - через точку .special
// <p class="special">

document.querySelector('section ul li.special')  // <li class="special">
document.querySelector('section li.special')  // если нужно получить нужный элемент, то можно указать конкретный tag

document.querySelector('input')
// <input type="text" placeholder="Bear Name">

document.querySelector('input[type="password"]')
// <input type="password" placeholder="password">

document.querySelectorAll('input')
// NodeList(3) [ input, input, input ]
// NodeList - другой тип коллекции

document.querySelectorAll('.special')
// NodeList(4) [ p.special, li.special, li.special, li.special ]

document.querySelectorAll('li')
// NodeList(6) [ li.special, li, li.special, li, li.special, li ]

const specials = document.querySelectorAll('.special')
specials[0].textContent  // ADSDSDSDSDSD
