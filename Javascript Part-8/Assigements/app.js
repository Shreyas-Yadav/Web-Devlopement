let userName = document.createElement('input');
userName.id = 'username';
userName.placeholder = 'Username';
// let userLabel = document.createElement('label');
// userLabel.setAttribute('for', userName.getAttribute('id'));


let btn = document.createElement('button');
btn.textContent = 'Click Me';
btn.id = 'btn';


let heading = document.createElement('h1');
heading.innerText = 'DOM Practice';
heading.style.textDecoration = 'underline';
heading.style.color = 'purple';

let para = document.createElement('p');
para.innerHTML = `Apna College <b>Delta</b> Practice`;


document.body.appendChild(heading);
document.body.appendChild(userName);
document.body.appendChild(btn);
document.body.appendChild(para);

document.querySelector('button').style.backgroundColor = 'blue';
document.getElementById('btn').style.color = 'white';