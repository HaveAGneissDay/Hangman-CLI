var letter = function (userGuess) {
       this.value = userGuess.toUpperCase();
       this.show = false;

    if(this.value == ' ') {

        this.show = true;
    }
    letter.printInfo = function () {
        if (this.show) {
            return this.value;
        }
        return "_ ";
    }
}


module.exports = letter;