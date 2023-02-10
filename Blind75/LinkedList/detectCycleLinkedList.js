const detectCycleInLinkedList = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = fast.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};
