// Plus One
function plusOne(digits: number[]): number[] {
  for (let i: number = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  const result: number[] = [];
  result[0] = 1;
  return result;
};