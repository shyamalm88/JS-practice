let head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const middleOfLinkedList = (head) => {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log(slow.data);
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
push(10);
printList(head);
console.log("==========");
middleOfLinkedList(head);
