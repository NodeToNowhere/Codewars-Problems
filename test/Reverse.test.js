import {
  reverse
} from "../Problems/Reverse.js";
import chai from "chai";
const assert = chai.assert;


describe("Reverse tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverse('world'), 'dlrow');
    assert.strictEqual(reverse('hello'), 'olleh');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('h'), 'h');
  });
});