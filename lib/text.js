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

    setColor(color){
        const colorCheck = dom.window.document.createElement('div');
        colorCheck.style.color = color;
        if (!colorCheck.style.color){
            throw new Error("Must enter a valid color.")
        };
        this.color = color.toLowerCase();
    };

    setStyle(style){
        this.textStyle = style;
    };

    render(shape){
        let textY = "50%"
        if (shape==="Triangle"){
            textY="59%"
        }
        // return `<text x="150" y="100" fill="${this.color}" class="${this.textStyle}" dominant-baseline="middle" text-anchor="middle">${this.logoText}</text>`
        return `<text x="50%" y=${textY} fill="${this.color}" class="${this.textStyle}" dominant-baseline="middle" text-anchor="middle">${this.logoText}</text>`
    };
};

module.exports = {
    Text
};