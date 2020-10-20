// Rotate Array
function rotate(nums: number[], k: number): number[] {
  var a: number | undefined;
  for (var i = 0; i < k; i++) {
    a = nums.pop()
    if (a != undefined)
      nums.unshift(a);
    else
      break;
  }
  return nums;
}