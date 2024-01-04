const { Text } = require('./text.js');

describe('Text', ()=>{
    describe('TooLong', ()=>{
        it("Should throw an error if the number of characters is not 3.", ()=>{
            const txt = () => new Text('o');
            const err = new Error("Text must be 3 characters.");
            expect(txt).toThrowError(err);
        });
    });
    describe('TooShort', ()=>{
        it("Should throw an error if the number of characters is not 3.", ()=>{
            const txt = () => new Text('ones');
            const err = new Error("Text must be 3 characters.");
            expect(txt).toThrowError(err);
        });
    });
    describe('Uppercase', ()=>{
        it("Should convert logoText to uppercase.", ()=>{
            const txt = new Text('one');
            expect(txt.logoText).toEqual("ONE");
        });
    });
    describe('Element', ()=>{
        it("Should return a valid svg text element.", ()=>{
            const txt = new Text('one');
            txt.setColor("red");
            txt.setStyle("large");
            expect(txt.render("Square")).toEqual('<text x="50%" y="50%" fill="red" class="large" dominant-baseline="middle" text-anchor="middle">ONE</text>');
        });
    });
});