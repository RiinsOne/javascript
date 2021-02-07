// first example
function grumpus() {
    alert('GAHHH GO AWAY!')
}
// setTimeout(grumpus, 5000);

// second example
// setTimeout(function() {
//     alert("WELCOME!");
// }, 5000)

const btn = document.querySelector('button');
// btn.addEventListener('click', grumpus)
btn.addEventListener('click', function() {
    alert('Why did you click me?');
})
