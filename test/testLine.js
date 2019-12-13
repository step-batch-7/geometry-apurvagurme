const Line = require('../src/line');
const { assert } = require('chai');

describe('Line', function() {
  describe('toString', function() {
    it('toString method should give the string representation of line object', function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 4, y: 3 });
      const expected = 'Line (1,1)-----(4,3)';
      const actual = line1.toString();
      assert.strictEqual(actual, expected);
    });
  });
  describe('isEqualTo', function() {
    it('isEqualTo method should give whether a line is equal to another line', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it('isEqualTo method should give false when one single point of a line is different', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      assert.isNotOk(line1.isEqualTo(line2));
    });

    it('isEqualTo method should give false when the other line is not instance of the same Line class', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = 'not a line';
      assert.isNotOk(line1.isEqualTo(line2));
    });
  });
});
