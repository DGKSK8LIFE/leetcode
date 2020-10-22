// First Unique Character in a String
function firstUniqChar(s: string): number {
  for (let i: number = 0; i < s.length; i++)
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  return -1;
};