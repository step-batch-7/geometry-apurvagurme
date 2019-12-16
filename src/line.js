const Point = require('./point');

const arePointsEqual = function(pointA, pointB) {
  return pointA.x === pointB.x && pointA.y === pointB.y;
};

const getYIntercept = function(x, y, slope) {
  return y - slope * x;
};

const isNumberInRange = function(number, range) {
  [min, max] = range.sort((a, b) => a - b);
  return number >= min && number <= max;
};

class Line {
  constructor(point1, point2) {
    this.endA = { x: point1.x, y: point1.y };
    this.endB = { x: point2.x, y: point2.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }

  get length() {
    const differenceOfXs = this.endB.x - this.endA.x;
    const differenceOfYs = this.endB.y - this.endA.y;
    return Math.hypot(differenceOfXs, differenceOfYs);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  findY(xCoordinate) {
    if (!isNumberInRange(xCoordinate, [this.endA.x, this.endB.x])) return NaN;
    if (this.endA.x == this.endB.x) return this.endA.y;
    const slope = this.slope;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    return slope * xCoordinate + yIntercept;
  }

  findX(yCoordinate) {
    if (!isNumberInRange(yCoordinate, [this.endA.y, this.endB.y])) return NaN;
    if (this.endA.y == this.endB.y) return this.endA.x;
    const slope = this.slope;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    return (yCoordinate - yIntercept) / slope;
  }

  isParallel(other) {
    if (other instanceof Line) {
      const yInterceptOfA = getYIntercept(this.endA.x, this.endA.y, this.slope);
      const yInterceptOfB = getYIntercept(
        other.endA.x,
        other.endA.y,
        other.slope
      );
      if (yInterceptOfA != yInterceptOfB) return this.slope == other.slope;
    }
    return false;
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
      isNumberInRange(point.x, [this.endA.x, this.endB.x]) &&
      isNumberInRange(point.y, [this.endA.y, this.endB.y])
    );
  }

  findPointFromStart(distance) {
    const distanceRatio = distance / this.length;
    const xCoordinate =
      (1 - distanceRatio) * this.endA.x + distanceRatio * this.endB.x;
    const yCoordinate =
      (1 - distanceRatio) * this.endA.y + distanceRatio * this.endB.y;
    return new Point(xCoordinate, yCoordinate);
  }

  findPointFromEnd(distance) {
    const distanceRatio = distance / this.length;
    const xCoordinate =
      (1 - distanceRatio) * this.endB.x + distanceRatio * this.endA.x;
    const yCoordinate =
      (1 - distanceRatio) * this.endB.y + distanceRatio * this.endA.y;
    return new Point(xCoordinate, yCoordinate);
  }
}

module.exports = Line;
