// Palindrome Linked List
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