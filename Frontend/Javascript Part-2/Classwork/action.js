
// Array Methods

// arr.push();  add at last
// arr.pop();  delete at last

// arr.unshift();  add at start
// arr.shift();    delete at start






// Concat Method merge two arrays and return new array 

let odds = ['1', '3', '5'];
let evens = ['2', '4', '6'];

let nums = odds.concat(evens);


// reverse() method reverse the original array 
nums.reverse();



// slice() Method 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let s1 = arr.slice(); // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let s2 = arr.slice(3); // return [4, 5, 6, 7, 8, 9, 0]
let s3 = arr.slice(4, 9); // return [5, 6, 7, 8, 9]
let s4 = arr.slice(-5); // return [6, 7, 8, 9, 0]



// indexOf() Method 
let idx = arr.indexOf('august');

// includes() Method 
let isPresent = arr.includes('july'); // return true if elemenet is present in array otherwise return false



// splice() Method modify original array

let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black', 'white', 'pink', 'grey'];

colors.splice(7); // delete elements from index 7

colors.splice(4, 2); // delete elemets form index 4 to index (4+2-1)=5 (included)

colors.splice(1, 2, 'gold', 'silver'); // delete elements form 1 to 2 and add elements form index 1 




// practice question-1 
let months = ['january', 'july', 'march', 'august']

months.splice(0, 2, 'july', 'june')
console.log(months);


// practice question-2

let langs = ['C', 'C++', 'HTML', 'Javascript', 'Python', 'Java', 'C#', 'SQL']

console.log(langs.reverse().indexOf('Javascript'));


// practice question-3 Tic-Tac-Toe

let matrix = [['x', null, 'O'], [null, 'X', null], ['O', null, 'X']]

