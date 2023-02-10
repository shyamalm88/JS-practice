/**
 * Description
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3
Input: [2,1,3]
Output: true


Example 2:

    5
   / \
  1   4
     / \
    3   6
Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

const isValidBST = function (root) {
  const aux = (node) => {
    if (!node) {
      return [true, null, null];
    }
    const [leftValid, leftMin, leftMax] = aux(node.left);
    const [rightValid, rightMin, rightMax] = aux(node.right);

    let valid = leftValid && rightValid;
    if (leftMax !== null && leftMax >= node.val) {
      valid = false;
    }
    if (rightMin !== null && rightMin <= node.val) {
      valid = false;
    }
    const currentMin = leftMin === null ? node.val : leftMin;
    const currentMax = rightMax === null ? node.val : rightMax;
    return [valid, currentMin, currentMax];
  };
  return aux(root)[0];
};
