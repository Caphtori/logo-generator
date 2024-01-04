const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);


class Shape{
    constructor(){
        this.dimensions;
        this.color;
    };

    setColor(color){
        const colorCheck = dom.window.document.createElement('div');
        colorCheck.style.color = color;
        if (!colorCheck.style.color){
            throw new Error("Must enter a valid color.")
        };
        this.color = color;
    };

    render(){
        return `<${this.dimensions} fill="${this.color}"/>`
    }
};

class Square extends Shape{
    constructor(){
        super();
        // this.dimensions = `rect x="10" y="10" width="100" height="100"`;
        this.dimensions = `rect x="75" y="25" height="150" width="150""`;
    }
};

class Circle extends Shape{
    constructor(){
        super();
        this.dimensions = `circle cx="150" cy="100" r="75" r="100"`;
    }
};

class Triangle extends Shape{
    constructor(){
        super();
        this.dimensions = `polygon points="150, 18 244, 182 56, 182"`;
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}