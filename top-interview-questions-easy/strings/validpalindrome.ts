// Valid Palindrome
function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i: number = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
};