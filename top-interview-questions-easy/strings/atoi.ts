// String To Integer (atoi)
function myAtoi(s: string): number {
  return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648)
};