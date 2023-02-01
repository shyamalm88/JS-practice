function leftViewOfBinaryTree(node) {
  let result = [];
  leftView(node, result, 0);
  return result;
}

function leftView(node, result, level) {
  if (node === null) {
    return;
  }
  if (level === result.length) {
    result.push(node.val);
  }
  leftView(node.left, result, level + 1);
  leftView(node.right, result, level + 1);
}
