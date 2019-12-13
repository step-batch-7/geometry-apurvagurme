const arePointsEqual = function(current, other) {
  return (
    current.endA.x == other.endA.x &&
    current.endA.y == other.endA.y &&
    current.endB.y == other.endB.y &&
    current.endB.x == other.endB.x
  );
};

class Line {
  constructor(x1, y1, x2, y2) {
    this.endA = { x: x1, y: y1 };
    this.endB = { x: x2, y: y2 };
  }

  toString() {
    return `Line (${this.endA.x},${this.endA.y})-----(${this.endB.x},${this.endB.y})`;
  }

  isEqualTo(other) {
    return arePointsEqual(this, other);
  }
}

module.exports = { Line, arePointsEqual };
