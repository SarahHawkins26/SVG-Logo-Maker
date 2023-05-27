//Base constructor class
class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
};
//creates class Circle and extends from the base class Shape
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
    };
};
//creates class Square and extends from the base class Shape
class Square extends Shape {
    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
    };
};
//creates class Triangle and extends from the base class Shape
class Triangle extends Shape {
    render() {
        return `<polygon points="150, 0 300, 200 0, 200" fill="${this.color}" />`;
    };
};

module.exports = {Circle, Square, Triangle};