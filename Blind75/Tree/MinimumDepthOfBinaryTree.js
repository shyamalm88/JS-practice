/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minimumDepth = (root) => {
  if (!root) return 0;
  if (!root.left) return minimumDepth(root.right) + 1;
  if (!root.right) return minimumDepth(root.left) + 1;
  return Math.min(minimumDepth(root.left), minimumDepth(root.right)) + 1;
};
