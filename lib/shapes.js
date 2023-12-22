class Shape{
    constructor(){
        this.dimensions;
        this.color;
    };

    setColor(color){
        this.color = color;
    };

    render(){
        return `<${this.dimensions} fill=${this.color}/>`
    }
};

class Square extends Shape{
    constructor(){
        this.dimensions = `rect x="10" y="10" width="200" height="200"`;
    }
};

class Circle extends Shape{
    constructor(){
        this.definition = `circle cx="25" cy="75" r="100"`;
    }
};

class Triangle extends Shape{
    constructor(){
        this.definition = `polygon points="150, 18 244, 182 56, 182"`;
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}