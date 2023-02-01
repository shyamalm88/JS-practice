const isSameBinaryTree = function (root1, root2) {
  if (root1 === null || root2 === null) {
    return root1 == root2;
  }
  return (
    root1.val === root2.val &&
    isSameBinaryTree(root1.left, root2.left) &&
    isSameBinaryTree(root1.right, root2.right)
  );
};
