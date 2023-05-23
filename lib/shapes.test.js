const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should test for blue color and black text', () => {
        const circle = new Circle();
        circle.setColor('blue');
        circle.setTextColor('black');

        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>` + 
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">SVG</text>`);
    });

});

describe('Square', () => {
    it('should test for pink color and purple text', () => {
        const square = new Square();
        square.setColor('pink');
        square.setTextColor('purple');

        expect(square.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="pink"/>` +
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">SVG</text>`);
    });
    
});

describe('Triangle', () => {
    it('should test for red color and blue text', () => {
        const triangle = new Triangle();
        triangle.setColor('red');
        triangle.setTextColor('blue');

        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />` +
        `<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text>`);
    });
    
});