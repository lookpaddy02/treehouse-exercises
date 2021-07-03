let correctGuess = false;

const number = 7;
const guessNumber = prompt("Please guess a number between 1- 10.");

if (+guessNumber === number) {
    correctGuess = true;
}

if (correctGuess === true) {
    console.log(alert("You've guessed the number!"));
} else {
    console.log(alert("Sorry :( Keep trying!")); 
}
