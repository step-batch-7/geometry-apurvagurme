const arePointsEqual = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

class Line {
  constructor(point1, point2) {
    this.endA = { x: point1.x, y: point1.y };
    this.endB = { x: point2.x, y: point2.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `Line ${endA}-----${endB}`;
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

  isParallel(other) {
    if (other === this) return false;
    return other instanceof Line && this.slope == other.slope;
  }
}

module.exports = Line;
