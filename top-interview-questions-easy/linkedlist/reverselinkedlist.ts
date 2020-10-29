// Reverse Linked List
function reverseList(head: ListNode | null): ListNode | null {
  let [prev, current]: ListNode[] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};