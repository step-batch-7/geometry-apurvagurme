const arePointsEqual = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

const getYIntercept = function(x, y, m) {
  return y - m * x;
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
    if (other instanceof Line) {
      return (
        arePointsEqual(this.endA, other.endA) &&
        arePointsEqual(this.endB, other.endB)
      );
    }
    return false;
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
    return (
      this.slope * xCoordinate +
      getYIntercept(this.endA.x, this.endA.y, this.slope)
    );
  }

  findX(yCoordinate) {
    const yIntercept = getYIntercept(this.endA.x, this.endA.y, this.slope);
    const slope = this.slope;
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
      if (yInterceptOfA == yInterceptOfB) return false;
      return this.slope == other.slope;
    }
    return false;
  }
}

module.exports = Line;
