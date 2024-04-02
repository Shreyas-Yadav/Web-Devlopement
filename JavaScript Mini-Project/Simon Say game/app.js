let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;
let highScore = 0;
// let bgcolors = ["#FFFFFF", "#e83e88", "#5fbedd", "#FFA500", "#3998e1"];

let levelText = document.querySelector('h4');


function flash(btn = null) {
    if (!started) return;


    let id = '';

    if (btn == null) {     // when computer flash box
        let no = Math.floor(Math.random() * 4) + 1;
        id = "box" + no;
        btn = document.getElementById(id);
        gameSequence.push(id);
        console.log(gameSequence);
    }
    else {      // when user flash box
        id = btn.getAttribute('id');
        userSequence.push(id);
        console.log(userSequence);
    }


    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

let levelUp = function () {
    if (!started) return;
    userSequence = [];
    level++;
    levelText.innerText = `Level ${level} `;

    flash();
};

document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});


let checkAns = function (idx) {
    // let idx = level - 1;
    if (userSequence[idx] === gameSequence[idx]) {
        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        highScore = Math.max(level, highScore);
        levelText.innerHTML = `Game Over!! Your Score is <b>${level}</b>\nHigh Score till now <b>${highScore}</b> \n Enter any key to restart the game`;
        reset();
    }
}

let btnPressed = function () {
    if (!started) return;
    flash(this);
    checkAns(userSequence.length - 1);

}

let reset = function () {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}

let allBtns = document.querySelectorAll(".innerbox");
for (let box of allBtns) {
    box.addEventListener('click', btnPressed);
}