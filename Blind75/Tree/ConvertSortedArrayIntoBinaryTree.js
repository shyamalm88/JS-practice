/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {
  return helper(nums, 0, nums.length - 1);
};

const helper = (nums, l, r) => {
  let left = l;
  let right = r;
  let middle = Math.floor((left + right) / 2); // get the middle node
  if (left > right) return null;
  const root = new TreeNode(nums[mid]); // assign the middle node value as root of binary tree
  root.left = helper(nums, l, middle - 1); // recursion for left
  root.right = helper(nums, middle + 1, right); // recursion for right
  return root;
};

const arr = [-10, -3, 0, 5, 9];
sortedArrayToBST(arr);
