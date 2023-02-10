/**
 * Description
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
 */

const levelOrder = (root) => {
  const aux = (node, level, acc) => {
    if (!node) {
      return acc;
    }
    if (node.left) {
      aux(node.left, level + 1, acc);
    }
    if (acc[level]) {
      acc[level].push(node.val);
    } else {
      acc[level] = [node.val];
    }
    if (node.right) {
      aux(node.right, level + 1, acc);
    }
    return acc;
  };
  return aux(root, 0, []);
};
