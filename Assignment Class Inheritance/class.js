class Shape {
    constructor(color){
        if(color){
            this.color = color;
        }else{
            this.color = 'red';
        }
    }
    drawShape(){}

    calculateArea() {}
}

module.exports = Shape;

const Shape = require('./shape');

class Circle extends Shape {
    calculateArea(radius){
        return Math.PI * Math.pow(radius, 2);
    }
}

module.exports = Circle;