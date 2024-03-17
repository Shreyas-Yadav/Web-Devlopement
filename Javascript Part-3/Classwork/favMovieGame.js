
// Guess Movie

let favMovie = '3idiots'

while (true) {
    let guess = prompt('Guess the fav movie');

    if (guess == favMovie) {
        alert('Hurrey you cracked it...!!')
        break;
    }
    else if (guess.toLowerCase() == 'exit') {
        break;
    }
    else {
        alert(`Wrong Guess :( try again or enter exit to exit from game`);
    }
}