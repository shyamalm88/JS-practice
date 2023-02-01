/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const convertSortedToBST = (node) => {
  return helper(node, null);
};

const helper = (head, foot) => {
  let fast = head;
  let slow = head;
  let node = null;
  if (head === foot) return null;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  node = new TreeNode(slow.val);
  node.left = helper(head, slow);
  node.right = helper(slow.next, foot);
  return node;
};
