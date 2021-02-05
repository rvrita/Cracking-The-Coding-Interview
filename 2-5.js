/*
Sum Lists

You have two numbers represented by a linked list, where each node contains a single digit.
The digits are stored in reverse order, such that the 1's digit is at the head of the list. 
Write a function that adds the two numbers and returns the sum as a linked list. 

*/

var sumList = function(list1, list2) {
  var res = new Node();
  head = res;
  node1 = list1;
  node2 = list2;
  var counter = 0;
  var sum = 0;
  while (node1 || node2) {
    sum = node1.val + node2.val + counter;
    counter = 0;
    if (sum > 0) {
      counter++;
      sum -= 10;
    }
    res.next = new Node(sum);
    res = res.next;
    if (node1) {
      node1 = node1.next;
    }
    if (node2) {
      node2 = node2.next;
    }
  }
  if (counter === 1) {
    res.next = new Node(1);
  }
  return head.next;
}