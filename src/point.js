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
    return this.x == other.x && this.y == other.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }
}

// p = new Point(2, 3);
// console.log(p);
// console.log(p.clone());

module.exports = Point;
