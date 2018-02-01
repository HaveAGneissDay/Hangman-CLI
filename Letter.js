var letterToBeGuessed = 






function (userGuess) {
    //Created a new variable with set false as the defualt value
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (this.word[i] == userGuess) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (wordChosen[i] == userGuess) {
                blankArray[i] = userGuess;
            }
        }
    } else {
        wrongGuesses.push(userGuess);
        this.guesses--;
    }
}

module.exports = letterToBeGuessed;