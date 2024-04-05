let heading = document.querySelector('h1');
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            if (num < 4) {
                reject('color not set');    // when promise get rejected
            }
            heading.style.color = color;
            resolve();      // when promise get resolved
        }, delay);

    });
}


async function test() {
    try {
        await changeColor('red', 1000);     // waits until promise get resolved if it fails the execution get stopped
        await changeColor('green', 1000);
        await changeColor('blue', 1000);
    }
    catch (err) {
        console.log(err);
    }
}

test();


