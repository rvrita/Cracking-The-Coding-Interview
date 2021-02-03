/*
Partition

Write code to partition a linke list around the value x, 
such that all nodes less than x come before all nodes greater than or equal to x. 
If x is contained within the list, the values of x only need to be after the elements less than x. 
The partition element x can appear anywhere in the "right patirion", 
it does not need to appear between the left and right partition.

Example:
3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 partition: 5
3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
  toString() {
    console.log(`[${this.val}]`);
    return `[${this.val}]->${this.next}`;
  }
}

var partition = function(head, partition) {
  var node = head;
  var right = new ListNode('dummy');
  var left = new ListNode('dummy');
  var rightDummy = right;
  var leftDummy = left;
  while (node) {
    if (node.val < partition) {
      left.next = node;
      left = left.next;
    } else {
      right.next = node;
      right = right.next;
    }
    const prev = node;
    node = node.next;
    prev.next = null;
  }

  left.next = rightDummy.next;
  return leftDummy.next;
}

const list = [3,6,8,5,2,10,1].reduceRight((acc, cur) => {
  const node = new ListNode(cur);
  node.next = acc;
  return node;
}, null);

console.log(list.toString());
console.log(partition(list, 5).toString());