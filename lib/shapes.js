class Shape{
    constructor(color){
        this.color = color;
    };
};

class Square extends Shape{
    constructor(color){
        super(color);
        this.definition = `<rect x="10" y="10" width="200" height="200" fill=${self.color}/>`;
    }
};

class Circle extends Shape{
    constructor(color){
        super(color);
        this.definition = `<circle cx="25" cy="75" r="100" fill=${self.color}/>`;
    }
};

class Triangle extends Shape{
    constructor(color){
        super(color);
        this.definition = `<polygon points="150, 18 244, 182 56, 182" fill=${self.color}/>`;
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}