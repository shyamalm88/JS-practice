var insertionSortList = function (head) {
  var newHead = new ListNode(0);
  var now = head;
  var next = null;
  var tmp = null;
  while (now) {
    next = now.next;
    tmp = newHead;
    while (tmp.next && tmp.next.val < now.val) {
      tmp = tmp.next;
    }
    now.next = tmp.next;
    tmp.next = now;
    now = next;
  }
  return newHead.next;
};
