// Maximum Depth of Binary Tree
function maxDepth(root: TreeNode | null): number {
  if (root === undefined || root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};