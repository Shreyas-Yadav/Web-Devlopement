let arr = [2, 4, 7, 2, 4, 5, 9, 0, 7, 8];
let strArr = ['one', 'two', 'three', 'four', 'five'];
// Task-1
// Square and sum of arrays using arrow function

let squaresSum = arr.reduce((res, x) => {
    return res += (x * x);
});

console.log(`Task-1 ans: ${squaresSum / arr.length}`);


// Task-2
// create new array using map which contains elemnt is exactly greater than 5 than original element

let task2Ans = arr.map((n) => (n + 5));
console.log('Task-2 ans:', task2Ans);

// Task-3
// convent all strings to uppercase in strArr

let task3Ans = strArr.map((n) => (n.toUpperCase()));
console.log('Task-3 ans:', task3Ans);


// Task-4 

function doubleAndReturnArgs(a, b, ...args) {
    let double = args.map((n) => (n * 2));
    let ans = [a, b, ...double];
    return ans;
}

let task4Ans = doubleAndReturnArgs(1, 2, 3, 2, 5, 2, 3, 5);
console.log('Task-4 ans:', task4Ans);


// Task-5
// Merge two objects into one object 
let obj1 = {
    name: 'shreyas',
    age: 22,
    gender: 'male'
}

let obj2 = {
    phone: '7387509793',
    city: 'kadepur',
    pincode: '415305'
}

let obj = { ...obj1, ...obj2 };
console.log('Task-5 ans:', obj);



