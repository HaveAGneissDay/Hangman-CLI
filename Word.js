var Letter = require('./letter.js');

// holds your words that you want to use 
function Word(word) {
    // word.split - splits word into array of letters
    //     .map - instantiate a new `Letter` for each character and return an array
    //            referred to with the instance variable, `letters`
    this.letters = word.split("").map(function (char) {
        return new Letter(char.toUpperCase());
    });
}
Word.prototype.getSolution = function () {
    return this.letters.map(function (letter) { // iterate over each letter
        return letter.getSolution(); // return the solution for each to form an array of solved letters
    }).join(''); // create a string from the array of solved letters
}

// setting `toString()` as a method lets us concatenate it like we would a string!
Word.prototype.toString = function () {
    return this.letters.join(' '); // see Letter.prototype.toString in Letter.js
};

Word.prototype.guessLetter = function (char) {
    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
    var foundLetter = false;
    this.letters.forEach(function (letter) {
        if (letter.guess(char)) {
            foundLetter = true;
        }
    });

    // Print the word guessed so far--because we set the method for toString,
    //  JavaScript will automatically concatenate this even if we don't call toString
    console.log("\n" + this + "\n");
    // return whether we found a letter
    return foundLetter;
};

// Returns true if all letters in the word have been guessed
Word.prototype.guessedCorrectly = function () {
    // The `every` method returns true if the callback function returns true for every element in the array
    return this.letters.every(function (letter) {
        return letter.visible;
    });
};


module.exports = Word;

