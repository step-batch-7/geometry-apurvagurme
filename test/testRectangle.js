const Rectangle = require('../src/rectangle');
const Point = require('../src/point');
const { assert } = require('chai');

describe('RECTANGLE', function() {
  describe('toString', function() {
    it('should give the representation of rectangle object', function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = '[Rectangle (1,1) to (2,3)]';
      assert.strictEqual(rectangle.toString(), expected);
    });
  });

  describe('area', function() {
    it('should give the area of the given rectangle', function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const expected = 1;
      assert.strictEqual(rectangle.area, expected);
    });
  });

  describe('perimeter', function() {
    it('should give the perimeter of the given rectangle', function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const expected = 4;
      assert.strictEqual(rectangle.perimeter, expected);
    });
  });

  describe('isEqualTo', function() {
    it('should validate when both rectangle are equal', function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe('covers', function() {
    it('should validate when point is in the rectangle', function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(2, 2);
      assert.isTrue(rectangle1.covers(point));
    });
  });

  describe('hasPoint', () => {
    it("should invalidate if points aren't lies on rectangle", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(7, 4);
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should invalidate if points aren't instance of Point", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 5, y: 4 };
      assert.isFalse(rectangle.hasPoint(point));
    });

    it("should validate if points lies on rectangle's length", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(5, 2);
      assert.isTrue(rectangle.hasPoint(point));
    });

    it("should validate if points lies on rectangle's width", () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = new Point(3, 1);
      assert.isTrue(rectangle.hasPoint(point));
    });
  });
});
