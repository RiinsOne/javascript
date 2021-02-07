const firstLi = document.querySelector('li')
firstLi  // <li class="special">
firstLi.parentElement  // <ul>
firstLi.parentElement.parentElement.parentElement  // <html dir="ltr" lang="en">

const ul = document.querySelector('ul')
ul.children  // HTMLCollection { 0: li.special, 1: li, 2: li.special, length: 3 }
ul.children[0]  // <li class="special">
ul.children[0].textContent  // "First thing"
ul.children[1].textContent  // "Second thing"

firstLi.nextElementSibling.innerText  // "Second thing"
firstLi.nextElementSibling.nextElementSibling.innerText  // "Third thing"

const thirdLi = firstLi.nextElementSibling.nextElementSibling
thirdLi.previousElementSibling.innerText  // "Second thing"
