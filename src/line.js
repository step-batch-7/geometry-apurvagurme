const arePointsEqual = function(a, b) {
  return a.x === b.x && a.y === b.y;
};

class Line {
  constructor(point1, point2) {
    this.endA = { x: point1.x, y: point1.y };
    this.endB = { x: point2.x, y: point2.y };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(other) {
    return (
      other instanceof Line &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }
}

module.exports = Line;
