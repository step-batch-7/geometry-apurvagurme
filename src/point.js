class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(funcRef) {
    return funcRef(this.x, this.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(other) {
    const differenceOfXs = this.x - other.x;
    const differenceOfYs = this.y - other.y;
    return Math.hypot(differenceOfXs, differenceOfYs);
  }
}

module.exports = Point;
