function letter(userGuess) {
    var isLetterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (wordChosen[i] == userGuess) {
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
        guessesLeft--;
    }
}