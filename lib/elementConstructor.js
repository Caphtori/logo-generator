const { Square, Circle, Triangle } = require('./shapes.js');
const { Text } = require('./text.js');

function renderElements(data){
    const text = Text(data.textChars);
    let shape;
    switch(data.textSize){
        case 'Regular':
            text.setStyle('regular');
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
    return `<svg version="1.1">\n\
        width="300" height="200"\n\
        <style>\n\
            .small {\n\
                font: 12px sans-serif;\n\
            }\n\
            .default {\n\
                font: 16px sans-serif;\n\
            }\n\
            .large {\n\
                font: 20px sans-serif;\n\
            }\n\
        </style>\n\
        ${shape.render()}\n\
        ${text.render()}\n\
    </svg>`
}

module.exports = {
    renderElements
}