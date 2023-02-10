/**
 * Description
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */

const buildTree = function (preorder, inorder) {
  const map = inorder.reduce((acc, node, index) => {
    acc[node] = index;
    return acc;
  }, {});
  let index = 0;
  const aux = (left, right) => {
    if (left === right) {
      index++;
      return new TreeNode(inorder[left]);
    }
    if (left > right) {
      return null;
    }
    const value = preorder[index++];
    const node = new TreeNode(value);
    const inorderIndex = map[value];
    node.left = aux(left, inorderIndex - 1);
    node.right = aux(inorderIndex + 1, right);
    return node;
  };
  return aux(0, inorder.length - 1);
};
