/*
Return kth to the last element from linked list
*/

var kthEl = function(head, k) {
  var kth = head;
  node = head;
  var counter = 0;
  while (node) {
    counter++;
    if (counter >= k+1) {
      kth = kth.next;
    }
    node = node.next;
  }
  return kth;
}