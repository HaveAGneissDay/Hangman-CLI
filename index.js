//Runs Inquirer to ask the questions
var inquirer = require("inquirer");
//requires the word file to get selected words
var Word = require("./Word.js");
//requires the letter file to check if you got it right or not
var Letter = require("./Letter.js");
//Runs play function inside game to start the game


//Variables that I need

var placeHolder;
var winCount = 0;
var loseCount = 0;
var blankArray = [];
var guessesLeft = 10;
var wrongGuesses = [];
var wordChosen = '';
var lettersInWord = [];
var numBlanks = 0;
var letter ="";

function startGame() {
                this.guessesLeft = 10;
                this.wrongGuesses = [];
                this.blankArray = [];
                this.wordChosen = Word[Math.floor(Math.random() * Word.length)];
                this.lettersInWord = wordChosen.split('');
                this.numBlanks = lettersInWord.length;
                for (var i = 0; i < numBlanks; i++) {
                    blankArray.push("_");
                }
                placeHolder = blankArray.join(' ');
                //Displays the number of blanks
                console.log(placeHolder + '\n' + "Number of Guesses Left: " + guessesLeft);
          guessALetter();
      }

function guessALetter() {
    inquirer.prompt(
        {
            type: "input",
            message: "Guess a letter.",
            name: "letter",
            validate: function(string) {
                letter = new Letter;
                if (letter) {
                    return true;
                } else {
                    return false;
                    console.log("Enter a letter and only one letter");
                }
            }
        }
    ).then(
        function letterGuessed(letter) {
            var isLetterInWord = false;
            for (var i = 0; i < numBlanks; i++) {
                if (wordChosen[i] == letter) {
                    isLetterInWord = true;
                }
            }

            if (isLetterInWord) {
                for (var i = 0; i < numBlanks; i++) {
                    if (wordChosen[i] == letter) {
                        blankArray[i] = letter;
                    }
                }
            } else {
                wrongGuesses.push(letter);
                this.guessesLeft--;
            }
            console.log(placeHolder + '\n' + "Number of guesses left:" + guessesLeft + '\n' + "Letters already guessed" + wrongGuesses);
        roundComplete();
        })

}

function roundComplete() {
if (lettersInWord.toString() == blankArray.toString()) {
    this.winCount++;
    console.log("You Won!" + '\n' + "Wins: " + winCount);
    startGame();
} else if (guessesLeft === 0) {
    this.loseCount++;
    console.log("You Lost!" + '\n' + "Losses: " + loseCount);
    startGame();
}
}

startGame();