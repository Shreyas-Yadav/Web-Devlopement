
// Task-1
let num = 100;
if (num % 10 == 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}


// Task - 2

let myname = prompt('Enter your name: ');
let age = prompt('Enter your  age: ');
let output = `${myname} is ${age} year old`
console.log(output);


// Task-3
let months = [[], ['January', 'February', 'March'], ['April', 'May', 'June'], ['July', 'August', 'September'], ['October', 'November', 'December']]
let quarter = 1;

switch (quarter) {
    case 1:
        console.log(months[quarter]);
        break;
    case 2:
        console.log(months[quarter]);
        break;
    case 3:
        console.log(months[quarter]);
        break;
    case 4:
        console.log(months[quarter]);
        break;
    default:
        console.log('Invalid quarter value');
        break;
}


// Task-4
let str = 'ask';
if ((str[0] == 'A' || str[0] == 'a') && str.length > 5) {
    console.log(`"${str}" is a golden string`);
}
else {
    console.log(`"${str}" is not a golden string`);
}


// Task-5
let a = 5;
let b = 3;
let c = 2;

if (a > b && a > c) {
    console.log(`"${a}" is largest number`);
}
else if (b > a && b > c) {
    console.log(`"${b}" is largest number`);
}
else {
    console.log(`"${c}" is largest number`);
}


// Task-6

let num1 = 1231;
let num2 = 4321;

if (num1 % 10 == num2 % 10) {
    console.log(`${num1} and ${num2} has same units place digit`);
}
else {
    console.log(`${num1} and ${num2} does not have same units place digit`);
}