console.log('Odd numbers');
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log('Even Numbers');
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


let n = prompt('Enter number: ');
console.log(`Table of ${n}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${i * n}`);
}






