import {
    highestWord
} from '../Problems/HighestWord';
import chai from 'chai';
const assert = chai.assert;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(highestWord('man i need a taxi up to ubud'), 'taxi');
        assert.strictEqual(highestWord('man i need a taxi up to ubud'), 'taxi');
        assert.strictEqual(highestWord('what time are we climbing up the volcano'), 'volcano');
        assert.strictEqual(highestWord('take me to semynak'), 'semynak');
        assert.strictEqual(highestWord('aa b'), 'aa');
        assert.strictEqual(highestWord('b aa'), 'b');
        assert.strictEqual(highestWord('bb d'), 'bb');
        assert.strictEqual(highestWord('d bb'), 'd');
        assert.strictEqual(highestWord('aaa b'), 'aaa');
    })
});