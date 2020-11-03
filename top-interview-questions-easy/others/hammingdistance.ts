// Hamming Distance
function hammingDistance(x: number, y: number): number {
  let value: number = x ^ y;
  let counter: number = 0;

  while (value != 0) {
    if (value & 1)
      ++counter

    value = value >> 1;
  }

  return counter;
};
