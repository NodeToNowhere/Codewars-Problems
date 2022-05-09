//return true or false base on of num is prime

//all primes odd
export function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num >= 2;
}