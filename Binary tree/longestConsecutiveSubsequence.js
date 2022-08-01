const longestConsecutiveSubUtil = function (
  node,
  currentLength,
  expected,
  res
) {
  if (node == null) {
    return;
  }

  if (node.val === expected) {
    currentLength++;
  } else {
    currentLength = 1;
  }

  res = Math.max(res, currentLength);

  longestConsecutiveSubUtil(node.left, currentLength, node.val + 1, res);
  longestConsecutiveSubUtil(node.right, currentLength, node.val + 1, res);
};

const logestConsecutive = function (node) {
  if (node === null) {
    return 0;
  }
  const res = 0;

  longestConsecutiveSubUtil(node, 0, node.val, res);
  return res;
};
