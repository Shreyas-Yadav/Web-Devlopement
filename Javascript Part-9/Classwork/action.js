let input = document.querySelector('input');

input.addEventListener('keypress', function (e) {
    console.log(e.code);
    console.log(e.key);
})