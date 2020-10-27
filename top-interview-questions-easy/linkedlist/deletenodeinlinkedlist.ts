// Delete Node in a Linked List
function deleteNode(root: ListNode | null): void {
  Object.assign(root, root.next);
};  