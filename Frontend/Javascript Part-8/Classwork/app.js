// Practice Questions 
let paraRed = document.createElement('p');
paraRed.innerHTML = `Hey I'm red`;
document.body.appendChild(paraRed);
paraRed.classList.add('red');

let paraGreen = document.createElement('h3');
paraGreen.innerHTML = `Hey I'm blue`;
document.body.appendChild(paraGreen);
paraGreen.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerHTML = `I'm in a div`;
let para = document.createElement('p');
para.innerHTML = `Me too`;
div.classList.add('divStyle');
document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(para);