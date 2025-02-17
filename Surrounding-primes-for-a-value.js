/*
We need a function prime_bef_aft() that gives 
the largest prime below a certain given value n,
and the smallest prime larger than this value.

The result should be output in a list like the following:
  primeBefAft == [befPrime, aftPrime]
  If n is a prime number it will give two primes, 
  n will not be included in the result.

Let's see some cases:
  primeBefAft(100) == [97, 101]
  primeBefAft(97) == [89, 101]
  primeBefAft(101) == [97, 103]
*/


// Solution

function primeBefAft(num) {
  const isPrime = (n) => {
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  
  let before = num - 1, after = num + 1;
  while (!isPrime(before)) --before;
  while (!isPrime(after)) ++after;
  return [before, after];
}

// or

const primeFactors = n => {
  if (n < 2) return [];
  const res = [];
  let max = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= max; ++i) {
    if (n % i === 0) {
      res.push(i);
      n /= i;
      max = Math.floor(Math.sqrt(n));
      i = (Math.min(...res) || 2) - 1;
    }
  }
  res.push(n);
  return res;
};

const isPrime = n => n > 1 && primeFactors(n).length === 1;

const primeBefAft = num => {
  let [i, j] = [num, num];
  while (!isPrime(--i));
  while (!isPrime(++j));
  return [i, j];
};