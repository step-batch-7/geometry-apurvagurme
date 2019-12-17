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
    this.vertexA = new Point(point1.x, point1.y);
    this.vertexC = new Point(point2.x, point2.y);
  }

  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
  }

  get area() {
    const breadth = getBreadth(this.vertexC.x, this.vertexA.x);
    const length = getLength(this.vertexC.y, this.vertexA.y);
    return length * breadth;
  }

  get perimeter() {
    const breadth = getBreadth(this.vertexC.x, this.vertexA.x);
    const length = getLength(this.vertexC.y, this.vertexA.y);
    return 2 * (length + breadth);
  }

  isEqual(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      other.vertexA.isEqualTo(this.vertexA) &&
      other.vertexC.isEqualTo(this.vertexC)
    );
  }

  covers(point) {
    return (
      isNumberInRange(point.x, [this.vertexA.x, this.vertexC.x]) &&
      isNumberInRange(point.y, [this.vertexA.y, this.vertexC.y])
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const vertexB = new Point(this.vertexA.x, this.vertexC.y);
    const vertexD = new Point(this.vertexC.x, this.vertexA.y);
    const AB = new Line(this.vertexA, vertexB);
    const BC = new Line(vertexB, this.vertexC);
    const CD = new Line(this.vertexC, vertexD);
    const DA = new Line(vertexD, this.vertexA);
    return point.isOn(AB) || point.isOn(BC) || point.isOn(CD) || point.isOn(DA);
  }
}

module.exports = Rectangle;
