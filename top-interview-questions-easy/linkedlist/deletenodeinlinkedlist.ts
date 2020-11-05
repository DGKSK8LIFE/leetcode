// Delete Node in a Linked List
function deleteNode(root: any): void {
  root.val = root.next.val;
  root.next = root.next.next;
};  