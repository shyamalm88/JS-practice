/**
 * Problem
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:

You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */

var buildTree = function (inorder, postorder) {
  return helper(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    postorder.length - 1
  );
};

var helper = function (inorder, postorder, inStart, inEnd, postIndex) {
  if (inStart > inEnd || postIndex < 0) return null;

  var index = 0;
  var root = new TreeNode(postorder[postIndex]);

  for (var i = inStart; i <= inEnd; i++) {
    if (inorder[i] === root.val) {
      index = i;
      break;
    }
  }

  root.right = helper(inorder, postorder, index + 1, inEnd, postIndex - 1);
  root.left = helper(
    inorder,
    postorder,
    inStart,
    index - 1,
    postIndex - 1 - (inEnd - index)
  );

  return root;
};
