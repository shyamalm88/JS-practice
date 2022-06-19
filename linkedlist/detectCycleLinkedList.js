const hasCycleInLinkedLIst = function (head) {
  let slow = head,
    fast = head;
  let flag = 0;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) return true;
  else return false;
};
