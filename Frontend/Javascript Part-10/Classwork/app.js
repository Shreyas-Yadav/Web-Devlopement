
// Program to change color of text after 1s delay one after another

// function changeColor(color, delay, nextColorChnage) {
//     setTimeout(function () {
//         heading.style.color = color;
//         if (nextColorChnage) nextColorChnage();
//     }, delay);
// }

// // callback Hell
// changeColor('green', 1000, function () {
//     changeColor('orange', 1000, function () {
//         changeColor('skyblue', 1000);
//     });
// });



let heading = document.querySelector('h1');
console.log(heading);
heading.style.textAlign = 'center';

function chnageColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve('color set success');
        }, delay);

    });
}


chnageColor('green', 1000)
    .then((result) => {
        console.log('Color set success');
        return chnageColor("skyblue", 1000);
    })
    .then((result) => {
        console.log('Color set success');
        return chnageColor("yellow", 1000);
    })
    .then((result) => {
        console.log('Color set success');
        return chnageColor("pink", 1000);
    })