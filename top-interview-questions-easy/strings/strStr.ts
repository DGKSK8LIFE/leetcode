// Implement strStr()
function strStr(haystack: string, needle: string): number {
  const needleLength: number = needle.length;
  if (needleLength === 0) return 0;
  for (let i: number = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }
  return -1;
};