const Circle = require('../src/circle');
const { assert } = require('chai');

describe('Circle', function() {
  describe('toString', function() {
    it('should give the string representation of Circle', function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = '[Circle @(1,2) radius 5]';
      assert.strictEqual(circle.toString(), expected);
    });
  });

  describe('isEqualTo', function() {
    it('should give validate both circles are equal', function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.isTrue(circle1.isEqualTo(circle2));
    });
  });

  describe('area', function() {
    it('should give area of of given circle', function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.area, 78, 0.6);
    });
  });

  describe('perimeter', function() {
    it('should give perimeter of given circle', function() {
      const circle = new Circle({ x: 1, y: 2 }, 2);
      assert.approximately(circle.perimeter, 12, 0.6);
    });
  });
});
