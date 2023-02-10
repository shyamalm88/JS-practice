let head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const reverseLinkedList = (node) => {
  let prev = null;
  let current = node;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const printList = (node) => {
  while (node != null) {
    console.log(node.data + " ");
    node = node.next;
  }
};

const push = (data) => {
  var temp = new Node(data);
  temp.next = head;
  head = temp;
};

push(85);
push(15);
push(4);
push(20);
printList(head);
console.log("==========");
head = reverseLinkedList(head);
printList(head);
