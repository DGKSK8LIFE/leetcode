// Convert Sorted Array to Binary Search Tree
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) return null;

  const mid: number = Math.floor(nums.length / 2);
  const root: TreeNode = new TreeNode(nums[mid]);

  // subtrees are BSTs as well
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};