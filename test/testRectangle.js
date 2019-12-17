const Rectangle = require('../src/rectangle');
const Point = require('../src/point');
const { assert } = require('chai');

describe('RECTANGLE', function() {
  describe('toString', function() {
    it('should give the representation of rectangle object', function() {
      const point = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const expected = '[Rectangle (1,1) to (2,3)]';
      assert.strictEqual(point.toString(), expected);
    });
  });
});
