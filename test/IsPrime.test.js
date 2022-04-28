import { isPrime } from '../Problems/isPrime.js';
import chai from 'chai';
const assert = chai.assert;
chai.config.truncateThreshold=0;


describe("IsPrime Tests", ()=>{
	
	it("Basic tests", () => {
		
		assert.strictEqual(isPrime(0),  false, "0 is not prime");
		assert.strictEqual(isPrime(1),  false, "1 is not prime");
		assert.strictEqual(isPrime(2),  true, "2 is prime");
		assert.strictEqual(isPrime(73), true, "73 is prime");
		assert.strictEqual(isPrime(75), false, "75 is not prime");
		assert.strictEqual(isPrime(-1), false, "-1 is not prime");
		
	});
	
	it("Test prime", () => {
		
		assert.strictEqual(isPrime(3),  true, "3 is prime");
		assert.strictEqual(isPrime(5),  true, "5 is prime");
		assert.strictEqual(isPrime(7),  true, "7 is prime");
		assert.strictEqual(isPrime(41), true, "41 is prime");
		assert.strictEqual(isPrime(5099), true, "5099 is prime");
		
	});
	
	it("Test not prime", () => {
		
		assert.strictEqual(isPrime(4),  false, "4 is not prime");
		assert.strictEqual(isPrime(6),  false, "6 is not prime");
		assert.strictEqual(isPrime(8),  false, "8 is not prime");
		assert.strictEqual(isPrime(9), false, "9 is not prime");
		assert.strictEqual(isPrime(45), false, "45 is not prime");
		assert.strictEqual(isPrime(-5), false, "-5 is not prime");
		assert.strictEqual(isPrime(-8), false, "-8 is not prime");
		assert.strictEqual(isPrime(-41), false, "-41 is not prime");
		
	});
});