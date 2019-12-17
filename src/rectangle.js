const Point = require('./point');
const Line = require('./line');

const isNumberInRange = function(number, range) {
  [min, max] = range.sort((a, b) => a - b);
  return number >= min && number <= max;
};

const getBreadth = function(x1, x2) {
  return Math.abs(x1 - x2);
};

const getLength = function(y1, y2) {
  return Math.abs(y1 - y2);
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

  get perimeter() {
    const breadth = getBreadth(this.endB.x, this.endA.x);
    const length = getLength(this.endB.y, this.endA.y);
    return 2 * (length + breadth);
  }

  isEqual(other) {
    if (!(other instanceof Rectangle)) return false;
    return other.endA.isEqualTo(this.endA) && other.endB.isEqualTo(this.endB);
  }

  covers(point) {
    return (
      isNumberInRange(point.x, [this.endA.x, this.endB.x]) &&
      isNumberInRange(point.y, [this.endA.y, this.endB.y])
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const vertexA = new Point(this.endA.x, this.endB.y);
    const vertexC = new Point(this.endB.x, this.endA.y);
    const vertexB = this.endB;
    const vertexD = this.endA;
    const AB = new Line(vertexA, vertexB);
    const BC = new Line(vertexB, vertexC);
    const CD = new Line(vertexC, vertexD);
    const DA = new Line(vertexD, vertexA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }
}

module.exports = Rectangle;
