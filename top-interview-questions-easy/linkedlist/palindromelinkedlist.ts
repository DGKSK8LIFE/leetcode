// Palindrome Linked List
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let curr: ListNode = head;
  const traverse = node => {
    if (node === null) {
      return true;
    }
    const prevIsSame = traverse(node.next);
    const currIsSame = curr.val === node.val;
    curr = curr.next;
    return prevIsSame && currIsSame;
  }
  return traverse(head);
};