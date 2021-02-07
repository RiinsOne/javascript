const range = document.querySelector('input[type="range"]')
range  // <input type="range" min="100" max="500" step="50">
range.getAttribute('max')  // "500"
range.getAttribute('min')  // "100"
range.getAttribute('type')  // "range"
range.getAttribute('lol')  // null
range.setAttribute('min', '-500')
range.setAttribute('type', 'radio')
