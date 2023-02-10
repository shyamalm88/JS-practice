/**
 * Description
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
 

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */

const isSubtree = function (s, t) {
  const is = (node1, node2) => {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }
    return is(node1.left, node2.left) && is(node1.right, node2.right);
  };
  const aux = (node) =>
    is(node, t) ||
    (!!node && aux(node.left, t)) ||
    (!!node && aux(node.right, t));
  return aux(s);
};
