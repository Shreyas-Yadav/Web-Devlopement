let box1 = document.getElementById('box1');
box1.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'black';
});


let box2 = document.getElementById('box2');
box2.addEventListener('keypress', function (e) {
    this.style.backgroundColor = 'pink';

});


let box3 = document.getElementById('box3');
box3.addEventListener('scroll', function () {
    console.log('scrolling is occured');
    this.style.backgroundColor = 'lightgreen';

});

box3.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
});


window.addEventListener('load', function () {
    box4.innerText = 'Loaded Successfully';
    console.log('action triggered');
});


let btn = document.createElement('button');
btn.innerText = 'Click Me';
document.getElementById('container').appendChild(btn);

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'green';
});


let heading = document.createElement('h2');
heading.innerText = 'Enter your name';
let inp = document.createElement('input');
inp.placeholder = 'Enter your name';
let container2 = document.getElementById('container-2');

container2.appendChild(inp);
container2.appendChild(heading);


inp.addEventListener('keyup', function () {
    let text = this.value;
    let display = '';
    for (char of text) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char == ' ') {
            display += char;
        }
    }
    if (display == '') {
        display = 'Enter your name'
    }
    heading.innerText = display;
});