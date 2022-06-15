class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

var root;

const inorder = function () {
  if (root == null) return;

  var s = [];
  var curr = root;

  while (curr != null || s.length > 0) {
    while (curr != null) {
      s.push(curr);
      curr = curr.left;
    }

    curr = s.pop();

    console.log(curr.data + " ");

    curr = curr.right;
  }
};

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
inorder();
