/**
 * Definition for singly-linked list.
 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let head = new ListNode();
  let curr = head;
  let sum = 0;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    sum = sum > 9 ? 1 : 0;
  }
  if (sum) {
    curr.next = new ListNode(sum);
  }
  return head.next;
};
