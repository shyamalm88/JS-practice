const BFSLevelOrder = function (root) {
  const level = [];
  if (!root) {
    return level;
  }

  const queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    level.push(node.data);
  }
  return level;
};
