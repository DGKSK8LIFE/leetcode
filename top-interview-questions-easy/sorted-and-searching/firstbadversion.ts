// First Bad Version
const solution = function (isBadVersion: any) {

  return function (n: number): number {
    let start: number = 1, end = n;
    while (start < end) {
      const mid: number = Math.floor(start + (end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};