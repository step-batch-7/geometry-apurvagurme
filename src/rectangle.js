const Point = require('./point');

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
}

module.exports = Rectangle;
