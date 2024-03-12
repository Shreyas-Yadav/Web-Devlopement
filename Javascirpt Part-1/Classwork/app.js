
// Practice Question-1
let colors = ['red', 'yellow', 'green']
let color = colors[1];

if (color == 'red') {
    console.log("Stop");
}

if (color == 'yellow') {
    console.log("Slow down");
}


if (color == 'green') {
    console.log("Go");
}


// Practice Question-2


let sizes = ['XL', 'L', 'M', 'S']
let size = sizes[0];

if (size == 'XL') {
    console.log(`Price is 250 ₹`);
}
else if (size == 'L') {
    console.log(`Price is 200 ₹`);
}
else if (size == 'M') {
    console.log(`Price is 100 ₹`);
}
else if (size == 'S') {
    console.log(`Price is 50 ₹`);
}

// Practice Question-3

let str = 'a good string'
if (str[0] == 'a' && str.length > 3) {
    console.log(`"${str}" is a good string`);
}
else {
    console.log(`${str} is not a good string`);
}


// Practice Question-4

let weeks = ['', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Firday', 'Saturday']
let day = 0;

switch (day) {
    case 1:
        console.log(weeks[day]);
        break;
    case 2:
        console.log(weeks[day]);
        break;
    case 3:
        console.log(weeks[day]);
        break;
    case 4:
        console.log(weeks[day]);
        break;
    case 5:
        console.log(weeks[day]);
        break;
    case 6:
        console.log(weeks[day]);
        break;
    case 7:
        console.log(weeks[day]);
        break;
    default:
        console.log('Invalid day');
        break;
}



let myname = prompt('Enter name:')
alert(myname)