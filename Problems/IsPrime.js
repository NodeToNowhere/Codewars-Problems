//return true or false base on of num is prime
// will be int - can be negative and zero - nums to 2^31

//all primes odd
export function isPrime(num){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) 
        if(num % i === 0) return false; 
    return num >= 2;
}