
alert("You have 9 guesses to guess the letter I am thinking!")

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var playerGuesses = [];

console.log(wins, losses, guessesLeft)

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice = letters[Math.floor(Math.random() * letters.length)]

console.log(computerChoice);

document.onkeyup = function (event) {
    
    var userGuess = event.key
    if (userGuess === computerChoice) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        guessesLeft = 9;
        playerGuesses = [];
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
    }
    else {
        guessesLeft--;
        document.getElementById("Guesses-Left").innerHTML = "Guesses left: " + guessesLeft;
        playerGuesses = playerGuesses + userGuess + ", ";
        document.getElementById("Letters-Guessed").innerHTML = "Your Guesses so far " + playerGuesses;
    }

    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        guessesLeft= 9;
        playerGuesses = []
        
    }

};







