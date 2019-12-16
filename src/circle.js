class Circle {
  constructor(point, radius) {
    this.point = point;
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.point.x},${this.point.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return (
      this.point.x == other.point.x &&
      this.point.y == other.point.y &&
      this.radius == other.radius
    );
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

module.exports = Circle;
