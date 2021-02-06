/*
Queue via Stacks
Implement a MyQueue class which implements a queue using two stacks. 
*/

class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  add(value) {
    while (this.s2.length) {
      this.s1.push(this.s2.pop());
    }
    this.s1.push(value);
  }
  remove() {
    while (this.s1.length) {
      this.s2.push(this.s1.pop())
    }
    return this.s2.pop();
  }
}