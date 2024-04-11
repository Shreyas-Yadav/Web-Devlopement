
// Task-1 
// arrow function which return avg of array elements 

let avg = (arr) => {
    let len = arr.length;
    let sum = 0;
    for (let x of arr) {
        sum += x;
    }
    return (sum / len);
}
let arr = [2, 1, 5, 2, 6, 3, 8, 3];
console.log('Average of array :', avg(arr));

// Task-2
// arrow function which return number is even or not 

let isEven = n => n % 2 == 0 ? 'Even' : 'Odd';
console.log(isEven(4));
console.log(isEven(5));



const obj = {
    msg: 'Hello world',
    getMsg: function () {
        console.log(this.msg);
    }
}

setTimeout(obj.getMsg, 1000);


let length = 4;

let callback = function () {
    console.log(this.length);
}

const object = {
    length: 5,
    method: function (callback) {
        callback();
    }
}
// console.log(object.prop);
object.method(callback);