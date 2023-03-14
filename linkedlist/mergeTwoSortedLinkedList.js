let head;
let head2;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const SortedMerge = (list1, list2) => {
  console.log(list1);
  console.log(list2);
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // if (list1.data > list2.data) {
  //   let temp = list1;
  //   list1 = list2;
  //   list2 = temp;
  // }

  // let res = list1;

  // while (list1 != null && list2 != null) {
  //   let temp = null;
  //   while (list1 != null && list1.data <= list2.data) {
  //     temp = list1;
  //     list1 = list1.next;
  //   }
  //   temp.next = list2;
  //   temp = list1;
  //   list1 = list2;
  //   list2 = temp;
  // }
  // return res;

  if (list1.data < list2.data) {
    list1.next = SortedMerge(list1.next, list2);
    return list1;
  } else {
    list2.next = SortedMerge(list1, list2.next);
    return list2;
  }
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

const push2 = (data) => {
  var temp = new Node(data);
  temp.next = head2;
  head2 = temp;
};

push(85);
push(15);
push(4);
push(20);
push(10);

push2(16);
push2(12);
push2(8);
push2(6);
push2(19);

// printList(head);
console.log("+++++++");
// printList(head2);
console.log("==========");

SortedMerge(head, head2);

printList(head2);
