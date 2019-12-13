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

  get length() {
    const differenceOfXs = this.endB.x - this.endA.x;
    const differenceOfYs = this.endB.x - this.endA.x;
    return Math.sqrt(differenceOfXs ** 2 + differenceOfYs ** 2);
  }

  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }

  isParallel(other) {
    if (other === this) return false;
    return other instanceof Line && this.slope == other.slope;
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
}

module.exports = Line;
