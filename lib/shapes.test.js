const { Square, Circle, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Color', ()=>{
        it("Should throw an error when an invalid color is entered.", ()=>{
            const square = new Square;
            const cc = ()=>square.setColor("notAColor");
            const err = new Error("Must enter a valid color.");
            expect(cc).toThrowError(err);
        });
    });
    describe('stringColor', ()=>{
        it("Should accept valid strings as colors.", ()=>{
            const square = new Square;
            square.setColor("cyan");
            expect(square.color).toEqual('cyan');
        });
    });
    describe('hexColor', ()=>{
        it("Should accept hex codes as colors.", ()=>{
            const square = new Square;
            square.setColor("#ffffff");
            expect(square.color).toEqual('#ffffff');
        });
    });
    describe('Square', ()=>{
        it("Should take in a color and return a square SVG element with that color.", ()=>{
            const square = new Square;
            square.setColor("blue");
            expect(square.render()).toEqual(`<rect x="75" y="25" height="150" width="150" fill="blue"/>`);
        });
    });
    describe('Circle', ()=>{
        it("Should take in a color and return a circle SVG element with that color.", ()=>{
            const circle = new Circle;
            circle.setColor("red");
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="red"/>`);
        });
    });
    describe('Triangle', ()=>{
        it("Should take in a color and return a triangle SVG element with that color.", ()=>{
            const triangle = new Triangle;
            triangle.setColor("yellow");
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`);
        });
    });
});