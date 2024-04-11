// Practice Question-1 
// Generate Numbers between 1 to 6 including 
function dice() {
    return Math.floor(Math.random() * 6) + 1;
}


// Practice Question-2
// Average of 3 numbers 
function avg(a, b, c) {
    return (a + b + c) / 3;
}

console.log(avg(2, 4, 7));

// Practice Question-3
// Multiplication Table of a Number 
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${n} = ${i * n}`);
    }
}
table(9);


// Practice Question-4
// Sum of a Number from 1 to n
function sum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum(10));


// Practice Question-5
// Concatenate all strings in an array
let arr = ['hello', 'world', 'namaste'];
function concateStrings(arr) {
    let ans = "";
    for (let x of arr) {
        ans = ans + x + ' ';
    }
    return ans;
}
console.log(concateStrings(arr));