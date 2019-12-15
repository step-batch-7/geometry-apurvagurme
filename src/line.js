const arePointsEqual = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

const getYIntercept = function(x, y, m) {
  return y - m * x;
};

const isNumberInRange = function(number, range1, range2) {
  return (
    (number >= range1 && number <= range2) ||
    (number >= range2 && number <= range1)
  );
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
    const slope = this.slope;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    if (!isNumberInRange(xCoordinate, this.endA.x, this.endB.x)) return NaN;
    return slope * xCoordinate + yIntercept;
  }

  findX(yCoordinate) {
    const slope = this.slope;
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    if (!isNumberInRange(yCoordinate, this.endA.y, this.endB.y)) return NaN;
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
    return (
      isNumberInRange(point.x, this.endA.x, this.endB.x) &&
      isNumberInRange(point.y, this.endA.y, this.endB.y)
    );
  }
}

module.exports = Line;
