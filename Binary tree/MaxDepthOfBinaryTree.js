class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(node) {
  if (node == null) {
    return 0;
  }
  let left = maxDepth(node.left);
  let right = maxDepth(node.right);
  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}

let root;
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Height of tree is : " + maxDepth(root));
