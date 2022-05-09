import {
  timeToMilli
} from "../Problems/Milliseconds.js";
import chai from "chai";
const assert = chai.assert;
describe("Millisecond Tests", () => {
  it("Tests", () => {
    assert.strictEqual(timeToMilli(0, 1, 1), 61000);
    assert.strictEqual(timeToMilli(1, 1, 1), 3661000);
    assert.strictEqual(timeToMilli(0, 0, 0), 0);
    assert.strictEqual(timeToMilli(1, 0, 1), 3601000);
    assert.strictEqual(timeToMilli(1, 0, 0), 3600000);
  });
});