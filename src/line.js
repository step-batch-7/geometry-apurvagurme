const Point = require('./point');

const isNumberInRange = function(number, range) {
  return (
    Math.min(range[0], range[1]) <= number &&
    number <= Math.max(range[0], range[1])
  );
};

const getCoordinate = function(coordinates, distance, length) {
  const distanceRatio = distance / length;
  return (1 - distanceRatio) * coordinates[0] + distanceRatio * coordinates[1];
};

const areCollinear = function(point1, point2, point3) {
  // return (
  //   (point2.y - point1.y) * (point3.x - point2.x) ===
  //   (point3.y - point2.y) * (point2.x - point1.x)
  // );
  return (
    point1.x * (point2.y - point3.y) +
      point2.x * (point3.y - point1.y) +
      point3.x * (point1.y - point2.y) ===
    0
  );
};

class Line {
  constructor(point1, point2) {
    this.endA = new Point(point1.x, point1.y);
    this.endB = new Point(point2.x, point2.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB);
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  findY(x) {
    if (!isNumberInRange(x, [this.endA.x, this.endB.x])) return NaN;
    if (this.endA.x == this.endB.x) return this.endA.y;
    const dx = this.endA.x - x;
    return this.endA.y - this.slope * dx;
  }

  findX(y) {
    if (!isNumberInRange(y, [this.endA.y, this.endB.y])) return NaN;
    if (this.endA.y == this.endB.y) return this.endA.x;
    const dy = this.endA.y - y;
    return this.endA.x - this.slope / dy;
  }

  isParallelTo(other) {
    if (!(other instanceof Line) || this == other) return false;
    if (areCollinear(this.endA, this.endB, other.endA)) return false;
    return this.slope == other.slope;
  }

  split() {
    const xCoordinate = (this.endA.x + this.endB.x) / 2;
    const yCoordinate = (this.endA.y + this.endB.y) / 2;
    const midPoint = { x: xCoordinate, y: yCoordinate };
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }

  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return (
      areCollinear(this.endA, this.endB, point) &&
      isNumberInRange(point.x, [this.endA.x, this.endB.x]) &&
      isNumberInRange(point.y, [this.endA.y, this.endB.y])
    );
  }

  findPointFromStart(distance) {
    const x = getCoordinate([this.endA.x, this.endB.x], distance, this.length);
    const y = getCoordinate([this.endA.y, this.endB.y], distance, this.length);
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = Line;
