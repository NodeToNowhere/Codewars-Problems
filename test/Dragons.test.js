import { hero } from "../Problems/Dragons.js";
import chai from 'chai';
const assert = chai.assert;

describe('Dragon tests', function() {
  it("Testing for fixed tests", () => {
    assert.strictEqual(hero(10, 5), true);
    assert.strictEqual(hero(7, 4), false);
    assert.strictEqual(hero(4, 5), false);
    assert.strictEqual(hero(100, 40), true);
    assert.strictEqual(hero(1500, 751), false);
    assert.strictEqual(hero(0, 1), false);
  });
});
