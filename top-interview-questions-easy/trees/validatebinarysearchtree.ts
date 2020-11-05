// Validate Binary Search Tree
function isValidBST(root: any | null, min = -Infinity, max = Infinity): boolean {
  if (!root) return true;
  return !(root.val <= min || root.val >= max) && isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};