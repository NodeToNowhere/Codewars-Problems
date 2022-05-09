import {
  highLow
} from '../Problems/HighLow.js';
import chai from 'chai';
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highLow("1 2 3"), "3 1");
  });
});