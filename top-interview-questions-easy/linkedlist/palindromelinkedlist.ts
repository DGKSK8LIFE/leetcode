// Palindrome Linked List
function isPalindrome(head: any | null): boolean {
  let curr: any = head;
  const traverse = (node: any) => {
    if (node === null) {
      return true;
    }
    const prevIsSame: any = traverse(node.next);
    const currIsSame: boolean = curr.val === node.val;
    curr = curr.next;
    return prevIsSame && currIsSame;
  }
  return traverse(head);
};