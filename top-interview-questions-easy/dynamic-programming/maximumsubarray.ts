// Maximum Subarray
function maxSubArray(nums: number[]): number {
  let prev: number = 0;
  let max: number = -Number.MAX_VALUE;

  for (let i: number = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};