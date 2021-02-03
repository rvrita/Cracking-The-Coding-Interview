/*
Delete Middle Node
Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

My comments:
we can replace the values, we can move the next node's value t the one we want to delete and skip the next node
*/

var deleteMiddleNode = function(node) {
  if (node && node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
    return true;
  } else {
    return false;
  }
}

