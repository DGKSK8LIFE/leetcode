// Intersection of Two Arrays II
function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  let list: number[] = [];
  let p1: number = 0;
  let p2: number = 0;
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      list.push(nums1[p1]);
      p1++;
      p2++;
    }
  }

  const result: number[] = [];
  let i: number = 0;
  while (i < list.length) {
    result[i] = list[i];
    i++;
  }
  return result;
};
