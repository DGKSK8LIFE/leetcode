// Move Zeros
function moveZeroes(nums: number[]): void {
  let i: number = 0;
  let j: number = 0;
  while (j < nums.length) {
    if (nums[j] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
};