var Letter = function (userGuess) {
       this.value = userGuess;
       this.show = false;

    if(this.value == ' ') {

        this.show = true;
        return " ";
    }
    Letter.prototype.printInfo = function () {
        if (this.show === false) {
            return "_ ";
        }
        return this.value;
}
}


module.exports = Letter;