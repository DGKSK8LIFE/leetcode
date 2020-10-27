// Delete Node in a Linked List
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteNode(root: ListNode | null): void {
  root.val = root.next.val;
  root.next = root.next.next;
};  