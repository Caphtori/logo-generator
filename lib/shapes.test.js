const { Square, Circle, Triangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Square', ()=>{
        it("Should take in a color and return a square SVG element with that color.", ()=>{
            const square = new Square;
            square.setColor("blue");
            expect(square.render()).toEqual(`<rect x="10" y="10" width="200" height="200" fill="blue"/>`)
        })
    })
    describe('Circle', ()=>{
        it("Should take in a color and return a circle SVG element with that color.", ()=>{
            const circle = new Circle;
            circle.setColor("red");
            expect(circle.render()).toEqual(`<circle cx="25" cy="75" r="100" fill="red"/>`)
        })
    })
    describe('Triangle', ()=>{
        it("Should take in a color and return a triangle SVG element with that color.", ()=>{
            const triangle = new Triangle;
            triangle.setColor("yellow");
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>`)
        })
    })
});