// Symmetric Tree
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  let leftArr: any[] = [root.left], rightArr = [root.right];
  while (leftArr.length && rightArr.length) {
    let l: any = leftArr.pop(), r: any = rightArr.pop();
    if (!l && !r) continue;
    if (!l || !r) return false;
    if (l.val !== r.val) return false;
    leftArr.push(l && l.left);
    leftArr.push(l && l.right);
    rightArr.push(r && r.right);
    rightArr.push(r && r.left);
  }
  return true;
};