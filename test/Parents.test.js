import {
    findChildren
} from "../Problems/Parents.js"
import chai from "chai";
const assert = chai.assert;

describe("tests suite", function () {
	it("Some tests", function () {
		doTest("beeeEBb", "BbbEeee");
		doTest("uwwWUueEe", "EeeUuuWww");
		doTest("abBA", "AaBb");
		doTest("AaaaaZazzz", "AaaaaaZzzz");
		doTest("CbcBcbaA", "AaBbbCcc");
		doTest("xXfuUuuF", "FfUuuuXx")
	});
});