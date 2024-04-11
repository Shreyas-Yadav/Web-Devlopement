let btn = document.querySelector('button');
let list = document.querySelector('ul');
let inp = document.querySelector('input');


btn.addEventListener('click', function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement('button');
    delBtn.classList.add("delete");
    delBtn.innerText = 'Delete';

    item.appendChild(delBtn);
    list.appendChild(item);
    inp.value = '';
});

list.addEventListener('click', function (event) {
    if (event.target.nodeName == 'BUTTON') {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// let delBtns = document.querySelectorAll('.delete');
// console.log(delBtns);
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         console.log('Del clicked');
//         let par = this.parentElement;
//         par.remove();
//     });
// }
