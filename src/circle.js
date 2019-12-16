const Point = require('./point');

class Circle {
  constructor(point, radius) {
    this.point = new Point(point.x, point.y);
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

  get perimeter() {
    return 2 * Math.PI * this.radius;
  }

  hasPoint(point) {
    const distance = this.point.findDistanceTo(point);
    return distance == this.radius;
  }
}

module.exports = Circle;
