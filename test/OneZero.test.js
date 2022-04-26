import {
    oneZero
} from "../Problems/OneZero.js"
import chai from "chai";
const assert = chai.assert;

describe("One's and Zero's", () => {

    it("Array Tests", () => {
        assert.strictEqual(oneZero([0, 0, 0, 1]), 1);
        assert.strictEqual(oneZero([0, 0, 1, 0]), 2);
        assert.strictEqual(oneZero([1, 1, 1, 1]), 15);
        assert.strictEqual(oneZero([0, 1, 1, 0]), 6);
        assert.strictEqual(oneZero([1, 0, 0, 0, 0]), 16);
    });

});