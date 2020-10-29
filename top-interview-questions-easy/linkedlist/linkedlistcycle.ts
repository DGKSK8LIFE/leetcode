// Linked List Cycle
function hasCycle(head: ListNode | null): boolean {
  let p1: ListNode = head;
  let p2: ListNode = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      return true;
    }
  }

  return false;
};