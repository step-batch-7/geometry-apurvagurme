const Circle = require('../src/circle');
const { assert } = require('chai');

describe('Circle', function() {
  describe('Circle', function() {
    it('should give the string representation of Circle', function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      const expected = '[Circle @(1,2) radius 5]';
      assert.strictEqual(circle.toString(), expected);
    });
  });
});
