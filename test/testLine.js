const { Line, arePointsEqual } = require('../src/line');
const assert = require('assert');

describe('Line', function() {
  describe('toString', function() {
    it('toString method should give the string representation of line object', function() {
      const a = new Line(1, 1, 4, 3);
      let expected = 'Line (1,1)-----(4,3)';
      let actual = a.toString();
      assert.strictEqual(actual, expected);
    });
  });
  describe('isEqualTo', function() {
    it('isEqualTo method should give whether a line is equal to another line', function() {
      const a = new Line(1, 1, 4, 3);
      const b = new Line(1, 1, 4, 3);
      let actual = a.isEqualTo(b);
      let expected = true;
      assert.strictEqual(actual, expected);
    });
    it('isEqualTo method should give false when one single point of a line is different', function() {
      const a = new Line(1, 2, 3, 4);
      const b = new Line(1, 2, 3, 5);
      let actual = a.isEqualTo(b);
      let expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});

describe('arePointsEqual', function() {
  it('should give true value if every points are equal', function() {
    const current = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
    const other = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
    const expected = true;
    const actual = arePointsEqual(current, other);
    assert.strictEqual(actual, expected);
  });
});
