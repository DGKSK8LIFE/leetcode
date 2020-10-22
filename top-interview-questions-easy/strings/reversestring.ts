// Reverse String
function reverseString(s: string[]): void {
  let i: number = 0, j: number = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};