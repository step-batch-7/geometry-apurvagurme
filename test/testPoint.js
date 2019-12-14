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
});
