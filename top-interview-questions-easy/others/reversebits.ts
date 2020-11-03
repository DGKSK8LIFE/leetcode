// Reverse Bits
function reverseBits(n: number): number {
  let result: number = 0;
  let count: number = 32;

  while (count--) {
    result *= 2;
    result += n & 1;
    n = n >> 1;
  }
  return result;
};