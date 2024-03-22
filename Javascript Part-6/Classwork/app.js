// Practice Question-1
// Arrow function which return square of a number
let square = n => n * n;



let msg = () => console.log('hello world');

let fun = setInterval(msg, 2000);

setTimeout(() => {
    clearInterval(fun);
}, 10000);