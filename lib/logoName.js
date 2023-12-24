class LogoName{
    constructor(input){
        if (!input){
            throw new Error("Invalid logo name.")
        };
        this.filename = `${input.toLowerCase().split(' ').join('')}.svg`;
    };
};

module.exports = {
    LogoName
}