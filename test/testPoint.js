const Point = require('../src/point');
const { assert } = require('chai');

describe('POINT', function() {
  describe('toString', function() {
    it('should give the representation of Point object', function() {
      const point = new Point(2, 3);
      const expected = '[Point @(2,3)]';
      assert.strictEqual(point.toString(), expected);
    });
  });

  describe('visit', function() {
    it('should give the result of the given addition operation', function() {
      const point = new Point(3, 3);
      assert.strictEqual(
        point.visit((x, y) => x + y),
        6
      );
    });

    it('should give the result of the given subtraction operation', function() {
      const point = new Point(3, 3);
      assert.strictEqual(
        point.visit((x, y) => x - y),
        0
      );
    });

    it('should return multiplication of coordinates for multiply function', function() {
      const point = new Point(4, 5);
      assert.strictEqual(
        point.visit((x, y) => x * y),
        20
      );
    });
  });

  describe('isEqualTo', function() {
    it('should validate if the given points are equal', function() {
      const point1 = new Point(3, 3);
      const point2 = new Point(3, 3);
      assert.ok(point1.isEqualTo(point2));
    });

    it('should invalidate if the given points are not equal', function() {
      const point1 = new Point(3, 3);
      const point2 = new Point(3, 4);
      assert.notOk(point1.isEqualTo(point2));
    });

    it('should determine if both points passed is same', () => {
      const point = new Point(5, 9);
      assert.ok(point.isEqualTo(point));
    });

    it('should invalidate if given object has same coordinates but not of Point instance', function() {
      const point1 = new Point(3, 5);
      const point2 = { x: 3, y: 5 };
      const actual = point1.isEqualTo(point2);
      assert.notOk(actual);
    });
  });

  describe('clone', function() {
    it('should give the copy of given point', function() {
      const point = new Point(2, 3);
      assert.ok(point.isEqualTo(point.clone()));
    });
  });
});
