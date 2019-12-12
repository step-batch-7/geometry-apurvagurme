const Line = require('../src/line');
const assert = require('assert');

describe('Line', function() {
  it('toString method should give the string representation of line object', function() {
    const a = new Line(2, 4, 2);
    let actual = a.toString;
    let expected = 'Line { xCoordinate: 1, yCoordinate: 2, lengthOfLine: 3 }';
    assert.strictEqual(actual, expected);
  });

  it('isEqualTo method should give whether a line is equal to another line', function() {
    const a = new Line(2, 4, 2);
    const b = new Line(4, 6, 2);
    let actual = a.isEqualTo(b);
    let expected = true;
    assert.strictEqual(actual, expected);
  });
});
