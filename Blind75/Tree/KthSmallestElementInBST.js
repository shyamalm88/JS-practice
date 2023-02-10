/**
 * Description
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

 

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
 */

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const kthSmallest = (root, k) => {
  const result = [];
  const aux = (node) => {
    if (node) {
      aux(node.left);
      result.push(node.val);
      aux(node.right);
    }
  };
  aux(root);
  return result[k - 1];
};
