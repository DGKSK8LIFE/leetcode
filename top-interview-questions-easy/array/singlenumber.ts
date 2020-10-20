// Single Number (Bit Manipulation)
function singleNumber(nums: number[]): number {
  let a: number = 0;
  for (let i of nums) {
    a ^= i;
  }
  return a;
};