// Random color generator

let btn = document.querySelector('button');
let box = document.getElementById('box');
let vals = document.getElementById('rgbVals');
let genrateColor = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    vals.innerText = `RGB(${red}, ${green}, ${blue})`;
}

btn.addEventListener('click', genrateColor);