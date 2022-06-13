var inOrderTraversal = function (root) {
  const arr = [];
  return inTraversal(root, arr);
};

const inTraversal = (root, arr) => {
  if (root == null) {
    return arr;
  }
  if (root.left) {
    inTraversal(root.left, arr);
  }
  arr.push(root.val);
  if (root.right) {
    inTraversal(root.right, arr);
  }
  return arr;
};
