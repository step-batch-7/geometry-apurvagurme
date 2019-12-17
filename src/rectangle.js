const Point = require('./point');

const getBreadth = function(x1, x2) {
  return x1 - x2;
};

const getLength = function(y1, y2) {
  return y1 - y2;
};

class Rectangle {
  constructor(point1, point2) {
    this.endA = new Point(point1.x, point1.y);
    this.endB = new Point(point2.x, point2.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get area() {
    const breadth = getBreadth(this.endB.x, this.endA.x);
    const length = getLength(this.endB.y, this.endA.y);
    return length * breadth;
  }
}

module.exports = Rectangle;
