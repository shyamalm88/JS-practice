var preOrderTraversal = function (root) {
  let arr = [];
  return preTraverse(root, arr);
};

const preTraverse = (root, arr) => {
  if (!root) {
    return [];
  }
  if (root) {
    arr.push(root.val);
  }
  if (root.left) {
    preTraverse(root.left, arr);
  }
  if (root.right) {
    preTraverse(root.right, arr);
  }

  return arr;
};
