import {
  countPosNeg
} from "../Problems/CountPosNeg.js";
import chai from "chai";
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", () => {
  it("Testing numbers", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPosNeg(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  });

  it("Testing with 0", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPosNeg(testData);
    let expected = [8, -50];
    assert.deepEqual(actual, expected);
  });
});

it("Testing for null", () => {
  let testData = null;
  let actual = countPosNeg(testData);
  let expected = [];
  assert.deepEqual(actual, expected);
});

it("Testing for empty", () => {
  let testData = [];
  let actual = countPosNeg(testData);
  let expected = [];
  assert.deepEqual(actual, expected);
});