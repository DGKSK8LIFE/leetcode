// Binary Tree Level Order Traversal
function levelOrder(root: any | null): number[][] {
  if (!root) return [];

  const queue: any[] = [root];
  const levels: any[] = [];

  while (queue.length !== 0) {
    const queueLength: number = queue.length;
    const currLevel: any[] = [];
    for (let i: number = 0; i < queueLength; i++) {
      const current: any = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      currLevel.push(current.val);
    }
    levels.push(currLevel);
  }
  return levels;
};