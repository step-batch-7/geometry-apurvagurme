const Line = require('../src/line');
const Point = require('../src/point');
const { assert } = require('chai');

describe('LINE', function() {
  describe('toString', function() {
    it('should give the string representation of line object', function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 4, y: 3 });
      const expected = '[Line (1,1) to (4,3)]';
      const actual = line1.toString();
      assert.strictEqual(actual, expected);
    });
  });

  describe('isEqualTo', function() {
    it('should validate when a line is equal to another line', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it('should invalidate when one single point of a line is different', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 5 });
      assert.isNotOk(line1.isEqualTo(line2));
    });

    it('should invalidate when the other line is not instance of the same Line class', function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = 'not a line';
      assert.isNotOk(line1.isEqualTo(line2));
    });
  });

  describe('length', function() {
    it('should give length of the line for positive points', function() {
      const line = new Line({ x: 0, y: 0 }, { x: 3, y: 4 });
      assert.strictEqual(line.length, 5);
    });

    it('should give zero if the points are same', function() {
      const line = new Line({ x: 4, y: 4 }, { x: 4, y: 4 });
      assert.strictEqual(line.length, 0);
    });

    it('should give length of the line in floating points', function() {
      const line = new Line({ x: 0, y: 0 }, { x: 4, y: 4 });
      assert.approximately(line.length, 5, 0.9);
    });

    it('should give length of the line for negative points', function() {
      const line = new Line({ x: -1, y: -2 }, { x: 2, y: 2 });
      assert.strictEqual(line.length, 5);
    });
  });

  describe('slope', function() {
    it('should give slope of lines', function() {
      const line = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      assert.strictEqual(line.slope, 2);
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
    it('should validate when given lines are parallel', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 6, y: 0 });
      const line2 = new Line({ x: 0, y: 4 }, { x: 6, y: 4 });
      assert.ok(line1.isParallel(line2));
    });

    it('should invalidate if given lines are not parallel', function() {
      const line1 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const line2 = new Line({ x: 0, y: 1 }, { x: 5, y: 10 });
      assert.isNotOk(line1.isParallel(line2));
    });

    it('isParallel method should give false when given lines are equal', function() {
      const line1 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const line2 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      assert.notOk(line1.isParallel(line2));
    });

    it('should invalidate when other line is not an instance of Line class', function() {
      const line1 = new Line({ x: 0, y: 2 }, { x: 4, y: 10 });
      const line2 = 'not a line';
      assert.isNotOk(line1.isParallel(line2));
    });

    it('should invalidate when when is not an instance of Line class', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 1 });
      const line2 = new Line({ x: 2, y: 2 }, { x: 3, y: 3 });
      assert.isNotOk(line1.isParallel(line2));
    });
  });

  describe('findY', function() {
    it('should give the Y coordinate of the given x Coordinate of given line', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(line1.findY(1), 1);
    });

    it('should give the NaN when outside the Line Segment', function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line1.findY(9), NaN);
    });

    it('should give the NaN when oneEndPoint is(0,0) of the Line Segment', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line1.findY(9), NaN);
    });
  });

  describe('findX', function() {
    it('should give the X coordinate of the given y Coordinate of given line', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.strictEqual(line1.findY(1), 1);
    });

    it('should give the NaN when outside the Line Segment', function() {
      const line1 = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line1.findX(9), NaN);
    });

    it('should give the NaN when oneEndPoint is(0,0) of the Line Segment', function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 2, y: 2 });
      assert.deepStrictEqual(line1.findY(9), NaN);
    });
  });

  describe('split', function() {
    it('should give two lines splitted exactly of the center of the given line', function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const actual = line.split();
      const line1 = new Line({ x: 1, y: 2 }, { x: 2, y: 3 });
      const line2 = new Line({ x: 2, y: 3 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(actual[0]) && line2.isEqualTo(actual[1]));
    });
  });

  describe('hasPoint', function() {
    it('should validate when endpoint is given', function() {
      const point = new Point(1, 2);
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line.hasPoint(point));
    });

    it('should validate when endpoint is given', function() {
      const point = new Point(3, 4);
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line.hasPoint(point));
    });

    it('should validate when the given point is on the line', function() {
      const point = new Point(2, 2);
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.ok(line.hasPoint(point));
    });

    it('should invalidate when the given point is not on the line', function() {
      const point = new Point(9, 9);
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      assert.notOk(line.hasPoint(point));
    });
  });
});
