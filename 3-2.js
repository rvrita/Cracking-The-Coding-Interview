/*

Stack Min
How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time

*/

class StackMin {
  constructor() {
    this.storage = [];
    this.minStorage = [];
  }

  push(value) {
    this.storage.push(value);
    if (value < this.minStorage[this.minStorage.length-1]) {
      this.minStorage.push(value);
    }
  }

  pop() {
    var temp = this.storage.pop();
    if (temp === this.minStorage[this.minStorage.length-1]) {
      this.minStorage.pop();
    }
    return temp;
  }
}