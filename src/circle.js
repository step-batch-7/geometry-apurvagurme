const Point = require('./point');

class Circle {
  constructor(point, radius) {
    this.center = new Point(point.x, point.y);
    this.radius = radius;
  }

  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Circle)) return false;
    return (
      this.center.x == other.center.x &&
      this.center.y == other.center.y &&
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
    if (!(point instanceof Point)) return false;
    const distance = this.center.findDistanceTo(point);
    return distance == this.radius;
  }

  moveTo(point) {
    return new Circle(point, this.radius);
  }

  covers(point) {
    if (!(point instanceof Point)) return false;
    const distance = this.center.findDistanceTo(point);
    return distance < this.radius;
  }
}

module.exports = Circle;
