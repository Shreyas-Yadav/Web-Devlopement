
// trim() Method 
let msg = '             hello              ';
console.log(msg);
console.log(msg.trim());


// Lowercase and Uppercase Methods
let myname = 'shreyas suhas yadav'
console.log(myname.toLowerCase());
console.log(myname.toUpperCase());


// indexOf() method
let str = 'ILoveYou'
console.log(str.indexOf('Love'));

// slice() Method 
let mymsg = 'my msg is valid';
console.log(mymsg.slice(3, 6));
console.log(mymsg.slice(7));
console.log(mymsg.slice(-5));  // mymsg.slice(mymsg.length-5)


// replace() Method
let replaceStr = 'I love coding';
console.log(replaceStr.replace('love', 'enjoy'));

// repeat() Method 
let repeatStr = 'my name is shreyas ';
console.log(repeatStr.repeat(2));


// Practice Question - 1
// Trim and make it uppercase
let practiceStr1 = 'Help!';
console.log(practiceStr1.trim().toUpperCase());

// Practice Question - 2
let name = 'ApnaCollege';
console.log(name.slice(4, 9));
console.log(name.indexOf('na'));
console.log(name.replace('Apna', 'Our'));



// Practice Question - 2
// Sperate Collage part and replace 'l' with 't'
console.log(name.slice(name.indexOf('C')).replace('l', 't').replace('l', 't'));