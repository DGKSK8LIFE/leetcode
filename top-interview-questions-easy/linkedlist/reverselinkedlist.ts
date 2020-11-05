// Reverse Linked List
function reverseList(head: any | null): any | null {
  let [prev, current]: any[] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};