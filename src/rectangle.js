const Point = require('./point');
const Line = require('./line');

const isNumberInRange = function(number, range) {
  [min, max] = range.sort((a, b) => a - b);
  return number > min && number < max;
};

const getBreadth = function(x1, x2) {
  return Math.abs(x1 - x2);
};

const getLength = function(y1, y2) {
  return Math.abs(y1 - y2);
};

const getVerticesBAndD = function(vertexA, vertexC) {
  const vertexB = new Point(vertexA.x, vertexC.y);
  const vertexD = new Point(vertexC.x, vertexA.y);
  return { vertexB, vertexD };
};

const getSides = function(vertexA, vertexB, vertexC, vertexD) {
  const AB = new Line(vertexA, vertexB);
  const BC = new Line(vertexB, vertexC);
  const CD = new Line(vertexC, vertexD);
  const DA = new Line(vertexD, vertexA);
  return [AB, BC, CD, DA];
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

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return (
      other.vertexA.isEqualTo(this.vertexA) &&
      other.vertexC.isEqualTo(this.vertexC)
    );
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    return (
      isNumberInRange(point.x, [this.vertexA.x, this.vertexC.x]) &&
      isNumberInRange(point.y, [this.vertexA.y, this.vertexC.y])
    );
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const { vertexB, vertexD } = getVerticesBAndD(this.vertexA, this.vertexC);
    const sides = getSides(this.vertexA, vertexB, this.vertexC, vertexD);
    return sides.some(side => point.isOn(side));
  }
}

module.exports = Rectangle;
