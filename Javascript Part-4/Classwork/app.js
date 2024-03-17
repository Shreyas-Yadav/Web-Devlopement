let post = {
    username: "shreyasyadav",
    likes: 15000,
    content: 'This is my post',
    repost: 5,
    tags: ['#cars', '#money'],
};

// Guess Number Game

let max = prompt('Enter maximum range: ');
const num = Math.floor(Math.random() * max) + 1;
// console.log(num);
let guess = prompt('Guess the number');
while (true) {
    if (guess == num) {
        alert('You are amazing correct guess...!!');
        break;
    }
    if (guess.toLowerCase() == 'quit') {
        break;
    }
    guess = prompt('Guess the number');
}