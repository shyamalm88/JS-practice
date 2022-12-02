function rightViewOfBinaryTree(node) {
  let result = [];
  rightView(node, result, 0);
  return result;
}

function rightView(node, result, level) {
  if (node === null) {
    return;
  }
  if (level === result.length) {
    result.push(node.val);
  }
  rightView(node.right, result, level + 1);
  rightView(node.left, result, level + 1);
}
