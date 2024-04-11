
// Task-1 

let arr = [7, 9, 0, -2];
let n = 3;
let t1ans1 = arr.slice(0, n);
console.log(t1ans1);


// Task-2

let t2ans1 = arr.slice(n * -1);
console.log(t2ans1);


// Task-3 
let str = '';

if (str == false) {
    console.log('String is blank');
}
else {
    console.log(str);
}


// Task-4 

let string = ' Shreyas ';
let idx = 1;

if (string[idx] >= 'a' && string[idx] <= 'z') {
    console.log('Character is lowercase');
}
else {
    console.log('Character is not lowercase character');
}


// Task-5 

let msg = "                I'm going to become billionaire   ";
console.log(msg.trim());



// Task-6

let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let ele = 8;
console.log(nums.includes(ele) ? `${ele} present in array` : `${ele} not found in array`);





