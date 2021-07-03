let correctNumber = false;

const number = 6;
const guessNumber = prompt("Please guess a number between 1 and 10.");

if ( +guessNumber === number) {
    correctNumber = true;
} else if ( +guessNumber > number) {
const guessLess = prompt( `Please guess less than ${guessNumber}`);
if ( +guessLess === number) {
    correctNumber = true;
}
} else if ( +guessNumber < number) {
    const guessMore = prompt( `Please guess more than ${guessNumber}`);
    if ( +guessMore === number) {
        correctNumber = true;
}
}
if ( correctNumber ) {
    console.log( alert("Yeah! You got it right!") );
} else {
    console.log( alert(`Sorry, the right number was ${number}`) );
}
