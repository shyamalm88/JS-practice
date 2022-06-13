var postOrderTraversal = function (root) {
  let arr = [];
  return postTraverse(root, arr);
};

const postTraverse = (root, arr) => {
  if (!root) {
    return [];
  }
  if (root.left) {
    postTraverse(root.left, arr);
  }
  if (root.right) {
    postTraverse(root.right, arr);
  }
  if (root) {
    arr.push(root.val);
  }
  return arr;
};
