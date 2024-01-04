const punycode = require('punycode/')
const { Square, Circle, Triangle } = require('./shapes.js');
const { Text } = require('./text.js');

function renderElements(data){
    const text = new Text(data.textChars);
    let shape;
    switch(data.textSize){
        case 'Regular':
            text.setStyle('default');
            break;
        case 'Small':
            text.setStyle('small');
            break;
        case 'Large':
            text.setStyle('large');
    }
    switch(data.logoShape){
        case 'Square':
            shape = new Square;
            break;
        case 'Circle':
            shape = new Circle;
            break;
        case 'Triangle':
            shape = new Triangle;
    };
    text.setColor(data.textColor);
    shape.setColor(data.shapeColor);
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">\n\
    ${shape.render()}\n\
    ${text.render(data.logoShape)}\n\
    <style>\n\
        .small {\n\
            font: 16px sans-serif;\n\
        }\n\
        .default {\n\
            font: 32px sans-serif;\n\
        }\n\
        .large {\n\
            font: 48px sans-serif;\n\
        }\n\
    </style>\n\
</svg>`
}

module.exports = {
    renderElements
}