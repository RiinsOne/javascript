document.getElementsByClassName('header')
// HTMLCollection { 0: h1.header, length: 1 }

document.getElementsByClassName('special')
// HTMLCollection { 0: p.special, 1: li.special, 2: li.special, length: 3 }

const ul = document.getElementsByTagName('ul')[0]
ul  // <ul>
ul.getElementsByClassName('special')
// HTMLCollection { 0: li.special, 1: li.special, length: 2 }

ul.getElementsByTagName('li')
// HTMLCollection { 0: li.special, 1: li, 2: li.special, length: 3 }
