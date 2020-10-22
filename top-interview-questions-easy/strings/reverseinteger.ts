// Reverse Integer
function reverse(x: number): number {
  const absReversed: any = Math.abs(x).toString().split('').reverse().join('');
  if (absReversed > 2 ** 31) return 0;
  return absReversed * Math.sign(x);
};