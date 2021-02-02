/*
Remove duplicates from a linked list


*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var deleteNode = function(head) {
  var node = head;
  var valueDict = {};
  var prev;
  while (node) {
    value = node.value;
    if (!valueDict[value]) {
      valueDict[value] = 1;
      prev = node;
    } else {
      prev.next = node.next;
    }
    node = node.next;
  }
  return head;
};