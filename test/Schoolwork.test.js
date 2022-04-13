import { paperwork } from "../Schoolwork.js";
import chai from "chai";
const assert = chai.assert;

describe("Simple Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(paperwork(5, 5), 25, "Failed at paperwork(5, 5)");
    assert.strictEqual(paperwork(5, -5), 0, "Failed at paperwork(5, -5)");
    assert.strictEqual(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)");
    assert.strictEqual(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)");
    assert.strictEqual(paperwork(5, 0), 0, "Failed at paperwork(5, 0)");
  });
});
