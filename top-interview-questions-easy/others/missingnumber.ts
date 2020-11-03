// Missing Number
function missingNumber(nums: number[]): number {
  const res: any[] = new Array(nums.length + 1).fill(-1);
  for (const num of nums) {
    res[num] = num;
  }
  return res.indexOf(-1);
};