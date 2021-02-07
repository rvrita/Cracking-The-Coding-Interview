/*
Three in One
Describe how you could use a single array to implement three stacks.
*/

class threeStacks {
  constructor(size) {
    this.storage = new Array(size);
    this.firstEl = [0, size/2, 2*size/2];
    this.lastEl = [0, size/2, 2*size/2];
  }

  push(index, value) {
    if (this.lastEl[index] < this.firstEl[index+1]) {
      this.lastEl[index]++;
      this.storage[this.lastEl[index]] = value;
    } else {
      throw new Error("No space in the stack");
    }
  }

  pop(index) {
    if (this.lastEl[index] >= this.firstEl[index]) {
      var temp = this.storage[this.lastEl[index]];
      this.storage[this.lastEl[index]] = null;
      this.lastEl[index]--;
      return temp;
    } else {
      throw new Error("No more element in the stack to pop");
    }
  }
}