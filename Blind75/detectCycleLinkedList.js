const hasCycleInLinkedLIst = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = fast.next;
    fast = fast.fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
