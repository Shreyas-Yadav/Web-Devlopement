// Task-1 
let arr = [2, 2, 2, 2, 1, 2, 3, 4, 5, 6, 2, 3, 2, 2, 2, 2];
let num = 2;
console.log(arr);
for (let i = 0; i < arr.length;) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
    else {
        i++;
    }
}

// while (arr.indexOf(num) > 0) {
//     let index = arr.indexOf(num);
//     arr.splice(index, 1);
// }
console.log(arr);


// Task-2 & Task 3
// No of digits in number and sum of digits of number 
let n = 4512;
let org = n;
let sum = 0;
let cnt = 0;

while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
    cnt++;
}
console.log(`Length of number ${org} is ${cnt}`);
console.log(`Sum of digits of number ${org} is ${sum}`);



// Task-4
// Factorial of number 

let factorial = 1;
let number = 5;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(`Factorial of number ${number} is ${factorial}`);


// Task-5
// Largest number in array 
let nums = [2, 1, 3, 5, 6, 9, 4, 2, 6, 8];

let mx = nums[0];
for (let x of nums) {
    mx = Math.max(mx, x);
}
console.log(`Largest element in array [${nums}] is ${mx}`);
