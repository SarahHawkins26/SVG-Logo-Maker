const {Circle, Square, Triangle} = require('./shapes');

describe('Circle', () => {
    it('should test for blue color', () => {
        const circle = new Circle();
        circle.setColor('blue');

        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
    });

});

describe('Square', () => {
    it('should test for pink color', () => {
        const square = new Square();
        square.setColor('pink');

        expect(square.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="pink"/>`);
    });
    
});

describe('Triangle', () => {
    it('should test for red color', () => {
        const triangle = new Triangle();
        triangle.setColor('red');

        expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
    });
    
});