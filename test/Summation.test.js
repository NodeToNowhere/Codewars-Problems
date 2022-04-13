import { summation } from '../Summation.js';
import chai from 'chai';
const assert = chai.assert;

describe('summation', function () {
    it('should return the correct total', function () {
      assert.strictEqual(summation(1), 1)
      assert.strictEqual(summation(8), 36)
    })
  })
  