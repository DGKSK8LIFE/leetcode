// Merge Sorted Array
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let insertPos: number = m + n - 1;
  m--; n--;
  while (n >= 0) {
    nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
  }
};