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
    it('should validate when both rectangle given rectangle', function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 2 });
      assert.isTrue(rectangle1.isEqual(rectangle2));
    });
  });
});
