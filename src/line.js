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
    const sqrOfDiffOfXCoordinates =
      (this.endB.x - this.endA.x) * (this.endB.x - this.endA.x);
    const sqrOfDiffOfYCoordinates =
      (this.endB.x - this.endA.x) * (this.endB.y - this.endA.y);
    return Math.sqrt(sqrOfDiffOfXCoordinates + sqrOfDiffOfYCoordinates);
  }

  get slope() {
    const diffOfXCoordinate = this.endB.x - this.endA.x;
    const diffOfYCoordinate = this.endB.y - this.endA.y;
    return diffOfYCoordinate / diffOfXCoordinate;
  }
  isParrellel(other) {
    if (this.slope == other.slope) {
      return true;
    }
    return false;
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
