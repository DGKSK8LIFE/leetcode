// Remove Duplicates from Sorted Array
function removeDuplicates(nums: number[]): number {
  if (nums.length == 0) return 0;
  let i: number = 0;
  for (let j: number = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};