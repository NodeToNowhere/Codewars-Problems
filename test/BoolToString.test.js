import {
  booleanToString
} from '../Problems/BoolToString.js';
import chai from 'chai';
const Test = chai.assert;


describe("Bool To String", () => {
  it("Fixed Tests", function () {
    Test.strictEqual(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
    Test.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
    Test.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
  // it("Random Tests", function() {
  //   Array(40).fill(0).forEach(() => {
  //     const val = Math.random() < 0.5, exp = val ? "true" : "false"
  //     Test.strictEqual(booleanToString(val), exp, `When we pass in ${exp}, we want the string "${exp}" as output`)
  //   })
  // })
});