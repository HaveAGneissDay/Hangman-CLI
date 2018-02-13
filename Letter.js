Letter.prototype.toString = function () {
    if (this.visible === true) {
        return this.char;
    }
    return "_";
};

Letter.prototype.getSolution = function () {
    return this.char;
};


module.exports = Letter;