//complicated logic
// var getIntersectionNode = function (headA, headB) {
//   let a = headA;
//   let b = headB;

//   while (a != b) {
//     a = !a ? headB : a.next;
//     b = !b ? headA : b.next;
//   }

//   return a;
// };

function MergeNode(headA, headB) {
  let hs = new Set();
  while (headA != null) {
    hs.add(headA);
    headA = headA.next;
  }
  while (headB != null) {
    if (hs.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
}
