//Runs Inquirer to ask the questions
var inquirer = require("inquirer");
//requires the word file to get selected words
var Word = require("./Word.js");
//requires the letter file to check if you got it right or not
var Letter = require("./Letter.js");

function Game () {

    this.selectedWord = new Word;

    this.letter = selectedWord.split('');
    this.guesses = 10;
    this.wins = 0;
    this.loses = 0;

    this.getRandomWord = function () {
    // grab word from Word.js make it a new word object
        Math.floor(Math.random() * Word.length);
    }

    this.guess = function () {
        // input letter with inquirer check to see if inside of letters array.
        // if true, reprint word with guessed letter included
        // if false, decrement number of guesses
    }

    this.play = function () {
        //displays board, shows guesses
        // check to see if word is guessed completely, then if so, increment wins and start new game
        //if guesses <= 0 prompt "you suck" start game over increment losses
        // start the game again
    }
}