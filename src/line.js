class Line {
  constructor(x, y, l) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.lengthOfLine = l;
  }
  get toString() {
    return 'Line { xCoordinate: 1, yCoordinate: 2, lengthOfLine: 3 }';
  }
  isEqualTo(other) {
    return other.lengthOfLine == this.lengthOfLine;
  }
}

module.exports = Line;
