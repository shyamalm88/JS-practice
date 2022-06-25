class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  preOrder(node) {
    if (node === null) {
      return;
    }

    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }

  inOrder(node) {
    if (node === null) {
      return;
    }
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
  postOrder(node) {
    if (node === null) {
      return;
    }
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.value);
  }
}
