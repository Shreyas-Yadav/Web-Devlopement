
// Task-1
// return list of numbers from given array which are greater than given number  
function greaterNumbers(n, arr) {
    let nums = [];
    for (let x of arr) {
        if (x > n) {
            nums.push(x);
        }
    }
    return nums;
}

let arr = [2, 1, 4, 5, 7, 3, 8, 10];
let ans = greaterNumbers(3, arr);
console.log(ans);


// Task-2
// Function to extract unique char from strings
function uniqueCharacters(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (!ans.includes(str[i])) {
            ans = ans.concat(str[i]);
        }
    }

    return ans;
}

let str = "jhvsadjhavsdjvevasvdabbdqwijeqasdnansd";
console.log(uniqueCharacters(str));


// Task-3 
// Function which takes array of strings and return longest string

function longestString(arr) {
    let mxLen = 0;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > mxLen) {
            index = i;
            mxLen = arr[i].length;
        }
    }

    return arr[index];
}

let countries = ['USA', 'India', 'UK', 'Aus', 'Ger'];
console.log((longestString(countries)));


// Task-4 
// Count number of vowels in string 

function noOfVowels(str) {
    let cnt = 0;
    let vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            cnt++;
        }
    }

    return cnt;
}

let s = 'shreyas suhas yadav';
console.log(noOfVowels(s));


// Task-5 
// Genrate random number within range start to end

function randomNumber(s, e) {
    let ans = s + Math.floor(Math.random() * (e - s + 1));
    return ans;
}
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));
console.log(randomNumber(100, 150));




