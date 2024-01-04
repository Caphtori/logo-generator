const questions = [];

class Question{
    constructor(name, message){
        this.name = name;
        this.message = message;
    }
}

class Input extends Question{
    constructor(name, message){
        super(name, message);
        questions.push({
            type: "input",
            message: this.message,
            name: this.name
        })
    }
}

class List extends Question{
    constructor(name, message, choices){
        super(name, message);
        this.choices = choices;
        questions.push({
            type: "list",
            message: this.message,
            name: this.name,
            choices: this.choices
        })
    }
}

const logoName = new Input('logoName', "Who is this logo for? (file name)");
const textChars = new Input('textChars', "Enter three characters for your logo.");
const textColor = new Input('textColor', "Enter the text color you would like for your logo (name or hex code).");
const textSize = new List('textSize', "Choose the text size you would like for your logo.", ["Regular", "Small", "Large"]);
const logoShape = new List('logoShape', "Choose a shape you would like for your logo.", ["Square", "Triangle", "Circle"]);
const shapeColor = new Input('shapeColor', "Enter the shape color you would like for your logo.");

module.exports = questions;

