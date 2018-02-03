//Runs Inquirer to ask the questions
var inquirer = require("inquirer");
//requires the word file to get selected words
var Word = require("./Word.js");
//requires the letter file to check if you got it right or not
var Letter = require("./Letter.js");
function Game() {
    
   var chosenWord = "";
    this.guesses = 10;
    this.wins = 0;
    this.loses = 0;
    this.blanks = [];
    this.getSelectedWord = function () {
    // grab word from Word.js make it a new word object
       return chosenWord = [Math.floor(Math.random() * Word.length)].split('');
    }

    this.guess = function (guess) {
        // input letter with inquirer check to see if inside of letters array.
        inquirer.prompt(
            {
               type: "input",
               message: "Guess a letter.",
               name: "letter"
            }
        ).then(
        //     if(guess.letter) {

        //     }

        )
        // if true, reprint word with guessed letter included
        // if false, decrement number of guesses
    }

    this.play = function (input) {
        //displays board, shows guesses
        inquirer.prompt ({
            message: "confirm",
            question: "Shall we play a game?",
            name: "confirm",
            default: true
        }).then( function (input) {

            //get a random word
            if(input.confirm) {
                for (var i = 0; i < chosenWord.length; i++) {
                    Game.blanks.push("_");
                }
        Game.blanks.join(' ');
    } else {
        console.log("See you later!");
        user.play();
    } 
        // check to see if word is guessed completely, then if so, increment wins and start new game
        //if guesses <= 0 prompt "you suck" start game over increment losses
        // start the game again
    })
  }
}

//Need this line otherwise this file can't connect to index.js
module.exports = Game;
