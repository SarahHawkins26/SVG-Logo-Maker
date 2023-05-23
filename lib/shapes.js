class Shape {
    constructor() {
        this.color = '';
        this.textColor = '';
    }
    setColor(color) {
        this.color = color;
    }
    setTextColor(textColor){
        this.textColor = textColor;
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`
    }
};
class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`
    }
};
class Triangle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`
    }
};