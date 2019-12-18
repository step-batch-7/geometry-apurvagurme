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
      assert.deepStrictEqual(rectangle.area, expected);
    });

    it('should give area when  coordinates are negative', function() {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      assert.deepStrictEqual(rectangle1.area, 40);
    });
  });

  describe('perimeter', function() {
    it('should give the perimeter of the given rectangle', function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const expected = 4;
      assert.deepStrictEqual(rectangle.perimeter, expected);
    });

    it('should give perimeter when  coordinates are negative', function() {
      const rectangle1 = new Rectangle({ x: 2, y: 3 }, { x: -3, y: -5 });
      assert.deepStrictEqual(rectangle1.perimeter, 26);
    });
  });

  describe('isEqualTo', function() {
    it('should validate when both rectangle are equal', function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      assert.isTrue(rectangle1.isEqualTo(rectangle2));
    });

    it('should invalidate when the two instances not equal', () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = new Rectangle({ x: 10, y: 12 }, { x: 12, y: 13 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it('should invalidate when one rectangle1 is not an instance of Rectangle class', () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      const rectangle2 = {
        vertexA: { x: 10, y: 11 },
        vertexB: { x: 12, y: 13 }
      };
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });

    it('should validate when the two instances given are equal', () => {
      const rectangle1 = new Rectangle({ x: 10, y: 11 }, { x: 12, y: 13 });
      assert.isTrue(rectangle1.isEqualTo(rectangle1));
    });

    it('Should give true if other diagonal of same rectangle is given', () => {
      const rectangle1 = new Rectangle({ x: 0, y: 2 }, { x: 4, y: 0 });
      const rectangle2 = new Rectangle({ x: 4, y: 2 }, { x: 0, y: 0 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe('covers', function() {
    it('should validate when point is in the rectangle', function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 3, y: 3 });
      const point = new Point(2, 2);
      assert.isTrue(rectangle1.covers(point));
    });

    it('should invalidate when points are outside the rectangle', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
      const point = new Point(4, 4);
      assert.isFalse(rectangle.covers(point));
    });

    it('should invalidate when points is on the rectangle', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
      const point = new Point(2, 2);
      assert.isFalse(rectangle.covers(point));
    });

    it('should invalidate when given point is not the instance of point', () => {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
      const point = { x: 2, y: 2 };
      assert.isFalse(rectangle.covers(point));
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

    it('should invalidate when given point is not the instance of point', () => {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      const point = { x: 3, y: 1 };
      assert.isFalse(rectangle.covers(point));
    });
  });
});
