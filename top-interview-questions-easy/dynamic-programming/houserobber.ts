// House Robber
function rob(nums: number[]): number {
  return nums.reduce(function (p, n) {
    return [p[1], Math.max(p[0] + n, p[1])];
  }, [0, 0])[1];
};