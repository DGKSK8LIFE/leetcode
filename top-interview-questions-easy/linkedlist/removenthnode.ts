// Remove Nth Node From End of List
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let hare: ListNode = head, curr: ListNode = head;
  while (n--) {
    hare = hare.next;
  }
  while (hare && hare.next) {
    curr = curr.next;
    hare = hare.next;
  }
  if (!hare) {
    head = head.next;
  } else {
    curr.next = curr.next ? curr.next.next : null;
  }
  return head;
};
