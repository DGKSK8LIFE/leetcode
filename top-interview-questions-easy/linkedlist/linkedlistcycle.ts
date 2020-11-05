// Linked List Cycle
function hasCycle(head: any | null): boolean {
  let p1: any = head;
  let p2: any = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      return true;
    }
  }

  return false;
};