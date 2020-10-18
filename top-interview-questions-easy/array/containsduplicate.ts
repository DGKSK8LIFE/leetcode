// Contains Duplicate O(n^2)
function containsDuplicate(nums: number[]): boolean {
  for (let i: number = 0; i < nums.length; ++i) {
    for (let j: number = 0; j < i; ++j) {
      if (nums[j] == nums[i]) return true;
    }
  }
  return false;
}

// Attempt at O(n log n) sorting; doesn't work
// function containsDuplicate(nums: number[]): boolean {
//   let sortedArray: number[] = nums.sort((n1, n2) => n1 - 1);
//   for (let i: number = 0; i < sortedArray.length - 1; ++i)
//     if (sortedArray[i] == sortedArray[i + 1]) return true;
//   return false;
// }

// Attempt at O(n) with object/hashtable; couldn't get it to work hopefully will revisit soon
// function containsDuplicate(nums: number[]): boolean {
//   const map: object = {}
//   for (let x of nums) {
//     if (x in map) return true;
//     map[x] = x;
//   }
//   return false;
// };