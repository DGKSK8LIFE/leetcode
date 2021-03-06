// Merge Two Sorted Lists
function mergeTwoLists(l1: any | null, l2: any | null): any | null {
  let mergedHead: any = { val: -1, next: null },
    crt: any = mergedHead;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      crt.next = l2;
      l2 = l2.next;
    } else {
      crt.next = l1;
      l1 = l1.next;
    }
    crt = crt.next;
  }
  crt.next = l1 || l2;

  return mergedHead.next;
};


