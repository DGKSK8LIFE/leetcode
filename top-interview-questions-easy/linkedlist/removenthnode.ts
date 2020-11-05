// Remove Nth Node From End of List
function removeNthFromEnd(head: any | null, n: number): any | null {
  let hare: any = head, curr: any = head;
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
