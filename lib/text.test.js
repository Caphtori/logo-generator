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
            expect(txt.render()).toEqual('<text x="150" y="100" fill="red" class="large">ONE<text/>');
        });
    });
});