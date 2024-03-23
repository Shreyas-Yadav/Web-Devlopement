let arr = [1, 2, 3, 5, 4, 6, 7, 8, 9];

let students = [{
    name: 'shreyas',
    marks: 99
}, {
    name: "shravani",
    marks: 100
}, {
    name: 'parth',
    marks: 95
}];

//forEach() function
let print = function (x) {
    console.log(x);
}

// Passing normal function
arr.forEach(print);

// Passing arrow function 
arr.forEach((x) => {
    console.log(x);
})


// map() function
// return new array 
let square = arr.map((n) => (n * n));
console.log(square);
let gpa = students.map((student) => {
    let GPA = (student.marks - 0.75) / 10;
    student.gpa = GPA;
});
students.forEach((student) => {
    console.log(`GPA of ${student.name} : ${student.gpa}`);
});


// filter() function
// if callback function return true then element added in new array or elements gets ignored

let even = arr.filter((n) => (n % 2 == 0));
let lessThanFiveNums = arr.filter((n) => (n < 5));

console.log(`Even elements are : ${even}`);


//every() Method - similar to logical 'AND'
// return true if callback function return true value for every element otherwise return false
let gthZero = arr.every((n) => (n > 0 ? true : false));
console.log(gthZero);


// some() function -  similar to logical 'OR'
// return true if callback function returns true atleast one time otherwise return false
let divByFive = arr.some((n) => (n % 5 == 0));
console.log(divByFive);


// reduce() function 
// returns single value based on logic in callback function 
let max = arr.reduce((accumulator, n) => (Math.max(accumulator, n)));
console.log(`Max in array is : ${max}`);


// spread in JS

console.log(Math.max(...arr));
let copyArr = [...arr]; // copies all elemets of arr into copyArr 


// Rest in JS
// Can pass any number of argument to function using rest (...args) it will store all arguments in an array 
function fun(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}


// Destructuring arryas in JS 
let [one, two, three, ...remanings] = arr;
console.log(one, two, three, remanings);


// Destructuring objects in JS 
let student = {
    name: 'shreyas',
    age: 22,
    class: 'PG-FY',
    subjects: ['Algo', 'Java', 'DB', 'Web', 'ML', 'AI'],
    username: 'shri@820001',
    password: 'pass'
}

let { username, password } = student; // search for key in object and store in same-name variable
let { username: uname, password: pass } = student; // if you want to change the names of variables then you can also specify as given here { keyname:your_variable_name, } = obj_name;
console.log(`Username is : ${username} and password is : ${password}`);

//practice Ques-1
// check all numbers in array are multiples of 10 or not 

let nums = [10, 20, 30, 40, 50];
console.log(nums.every((n) => (n % 10 == 0)));

//practice Ques-2
// Find min in array

let min = nums.reduce((accumulator, x) => (Math.min(accumulator, x)));
console.log(`Min in array ${nums} is : ${min}`);