// Climbing Stairs
function climbStairs(n: number): number {
  let prev: number = 0;
  let cur: number = 1;
  let temp: number;

  for (let i: number = 0; i < n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
  }
  return cur;
};