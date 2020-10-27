// Reverse Linked List
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let [prev, current]: ListNode[] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};