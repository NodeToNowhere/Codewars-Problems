import {
    recoverSecret
} from "../Problems/recoverSecret_4.js"
import chai from "chai";
const assert = chai.assert;


describe("Tests", () => {
    it("test", () => {
  secret1 = "whatisup"
  triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
  
  Test.assertEquals(recoverSecret(triplets1), secret1)
    });
  });