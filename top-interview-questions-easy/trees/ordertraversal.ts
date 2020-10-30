// Binary Tree Level Order Traversal
function levelOrder(root: TreeNode | null): number[][] {
  const stack: any[] = [];
  const res: any[] = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};
