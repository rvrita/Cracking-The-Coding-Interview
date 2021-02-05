/*

Intersection
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. 
Note that the intersection is defined based on reference, not value. 
That is, if the kth node of the first linked list is the exact same node (by reference) 
as the jth node of the second linked list, then they are intersecting. 

*/

var intersection = function(list1, list2) {
  var counter1 = 0;
  var counter2 = 0;
  node = list1;
  while (node) {
    counter1++;
    node = node.next;
  }
  node = list2;
  while (node) {
    counter2++;
    node = node.next;
  }
  while (counter1 > counter2) {
    list1 = list1.next;
    counter1--;
  }
  while (counter2 > counter1) {
    list2 = list2.next;
    counter2--;
  }
  while (list1) {
    if (list1 === list2) {
      return list1;
    } else {
      list1 = list1.next;
      list2 = list2.next;
    }
  }
}