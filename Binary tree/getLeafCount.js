const getLeafCount = function (node) {
  if (node === null) {
    return 0;
  }
  if (node.left === null && node.right === null) {
    return 1;
  }

  return getLeafCount(node.left) + getLeafCount(node.right);
};
