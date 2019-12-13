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

  describe('length', function() {
    it('length property should give length of the line', function() {
      const line = new Line({ x: 0, y: 0 }, { x: 3, y: 4 });
      assert.approximately(line.length, 4.5, 0.5);
    });

    it('length property should give rounded length of the line', function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      const actual = line.length;
      assert.approximately(actual, 5, 0.9);
    });
  });

  describe('slope', function() {
    it('should give slope of lines', function() {
      const line = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const actual = line.slope;
      assert.strictEqual(actual, 2);
    });

    it('should give slope of line as zero when the given line is parallel to X-axis', function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 0 });
      assert.strictEqual(line.slope, 0);
    });

    it('should give slope of line as Infinity when the given line is parallel to Y-axis', function() {
      const line = new Line({ x: 0, y: 2 }, { x: 0, y: 3 });
      assert.strictEqual(line.slope, Infinity);
    });
  });

  describe('isParallel', function() {
    it('isParallel method should give true when given lines are parallel', function() {
      const line1 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const line2 = new Line({ x: 0, y: 0 }, { x: 5, y: 10 });
      assert.ok(line1.isParallel(line2));
    });

    it('isParallel method should give false when given lines are not parallel', function() {
      const line1 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const line2 = new Line({ x: 0, y: 1 }, { x: 5, y: 10 });
      assert.isNotOk(line1.isParallel(line2));
    });
  });
});
