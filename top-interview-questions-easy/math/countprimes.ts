// Count Primes
function countPrimes(n: number): number {
  const hash: boolean[] = new Array(n).fill(true);
  hash[0] = false;
  hash[1] = false;
  for (let i: number = 2; i * i < n; i++) {
    if (hash[i]) {
      for (let j: number = i * i; j < n; j += i) { // p*(p+1)...
        hash[j] = false;
      }
    }
  }
  return hash.filter((val) => val).length;
};