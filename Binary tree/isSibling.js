const isSibling = function (node, a, b) {
  // Base case
  if (node == null) {
    return false;
  }

  return (
    (node.left == a && node.right == b) ||
    (node.left == b && node.right == a) ||
    this.isSibling(node.left, a, b) ||
    this.isSibling(node.right, a, b)
  );
};
