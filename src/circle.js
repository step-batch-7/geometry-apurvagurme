class Circle {
  constructor(point, radius) {
    this.point = point;
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.point.x},${this.point.y}) radius ${this.radius}]`;
  }
}

module.exports = Circle;
