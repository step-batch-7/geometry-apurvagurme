const Point = require('./point');

const getYIntercept = function(x, y, slope) {
  return y - slope * x;
};

const isNumberInRange = function(number, range) {
  [min, max] = range.sort((a, b) => a - b);
  return number >= min && number <= max;
};

const getCoordinate = function(coordinates, distance, length) {
  const distanceRatio = distance / length;
  return (1 - distanceRatio) * coordinates[0] + distanceRatio * coordinates[1];
};

const arePointsCollinear = function() {};

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
    // console.log(this.endA.y == this.endB.y);
    if (this.endA.y === this.endB.y) return undefined;
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

  isParallelTo(other) {
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
    if (
      !(point instanceof Point) ||
      this.slope * (this.endA.y - point.y) !== this.endA.x - point.x
    )
      return false;
    return (
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
