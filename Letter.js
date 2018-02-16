function Letter(char) {
    // If a character is not a number or a letter, make it visible right away
    this.visible = !/[a-z1-9]/i.test(char);
    // Save the underlying character
    this.char = char;
}


Letter.prototype.toString = function () {
    if (this.visible === true) {
        return this.char;
    }
    return "_";
};

Letter.prototype.getSolution = function () {
    return this.char;
};

// Accepts a user's guess
Letter.prototype.guess = function (charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
        this.visible = true;
        return true;
    }

    // Otherwise return false
    return false;
};



module.exports = Letter;