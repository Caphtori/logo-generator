const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

class Text{
    constructor(logoText){
        if (logoText.length != 3){
            throw new Error("Text must be 3 characters.");
        };
        this.logoText = logoText.toUpperCase();
        this.color;
        this.textStyle;
    };

    // setText(chars){
    //     if (chars.length!=3){
    //         this.logoText = chars;
    //     } else{
    //         throw new Error("Text must be 3 characters.")
    //     };
    // };
    setColor(color){
        const colorCheck = dom.window.document.createElement('div');
        colorCheck.style.color = color;
        if (!colorCheck.style.color){
            throw new Error("Must enter a valid color.")
        };
        this.color = color;
    };

    setStyle(style){
        this.textStyle = style;
    };

    render(){
        // if (this.logoText.length!=3){
        //     const logoText = this.logoText.toUpperCase();
        //     return `<text x="150" y="100" class = >${logoText}<text/>`
        // }else{
        //     throw new Error("Text must be 3 characters.");
        // };
        return `<text x="150" y="100" class="${this.textStyle}">${this.logoText}<text/>`
    };
};

module.exports = {
    Text
};