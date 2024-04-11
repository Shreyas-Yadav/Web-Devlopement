let catUrl = 'https://catfact.ninja/fact';
let dogUrl = 'https://dog.ceo/api/breeds/image/random';
let jokeUrl = 'https://icanhazdadjoke.com';

let catBtn = document.querySelector('#catBtn');
let info = document.querySelector('#result');


let dogBtn = document.querySelector('#dogBtn');
let img = document.querySelector('img');


let jokeBtn = document.querySelector('#jokeBtn');
let joke = document.querySelector('#joke');

let headerAttr = {
    headers: {
        'Accept': "application/json",
    }
}

catBtn.addEventListener('click', async () => {
    let fact = await getCatFact();
    info.innerText = fact;
})

dogBtn.addEventListener('click', async () => {
    let imgSrc = await getDogImg();
    img.setAttribute('src', imgSrc);
})

jokeBtn.addEventListener('click', async () => {
    let jokeText = await getJoke();
    joke.innerText = jokeText;
})


async function getDogImg() {
    try {
        let res = await axios.get(dogUrl);
        let data = res.data.message;
        return data;
    }
    catch (e) {
        return e;
    }
}


async function getCatFact() {
    try {
        let res = await axios.get(catUrl);
        let data = res.data.fact;
        return data;
    }
    catch (e) {
        return e;
    }
}


async function getJoke() {
    try {
        let res = await axios.get(jokeUrl, headerAttr);
        let data = res.data.joke;
        return data;
    }
    catch (e) {
        return e;
    }
}