/*

Palindrome

Implement a function to check if a linked list is a palindrome.

notes: could add the values to an array and check if i and arr.length-1-i is the same
OR could reverse the list and check if the 2 are the same
*/

var palindrome = function(head) {

  var reverse = function(head) {
    newHead = new Node();
    node = head;
    while (node) {
      var newNode = new Node(node.val);
      newNode.next = newHead;
      newHead = newNode;
      node = node.next;
    }
    return newHead.next;
  }

  // walk over the 2 lists and check if each node is the same

}