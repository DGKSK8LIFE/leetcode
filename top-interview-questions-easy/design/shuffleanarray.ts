// Shuffle an Array
const Solution = function (nums: number[]) {
  this.nums = nums;
  this.original = nums.slice();
};

Solution.prototype.reset = function (): number[] {
  return this.original;
};

Solution.prototype.shuffle = function (): number[] {
  this.nums.sort((a, b) => { if (Math.random() > 0.5) return 1; else return -1; });
  return this.nums;
};