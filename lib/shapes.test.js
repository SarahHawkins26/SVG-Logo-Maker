const {Circle, Square, Triangle} = require('./shapes');

//testing Circle with jest
describe('Circle', () => {
    it('should test for blue color', () => {
        const circle = new Circle();
        circle.setColor('blue');

        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue"/>`);
    });

});
//testing Square with jest
describe('Square', () => {
    it('should test for pink color', () => {
        const square = new Square();
        square.setColor('pink');

        expect(square.render()).toEqual(`<rect x="50" y="0" width="200" height="200" fill="pink"/>`);
    });
    
});
//testing Triangle with jest
describe('Triangle', () => {
    it('should test for red color', () => {
        const triangle = new Triangle();
        triangle.setColor('red');

        expect(triangle.render()).toEqual(`<polygon points="150, 0 300, 200 0, 200" fill="red" />`);
    });
    
});