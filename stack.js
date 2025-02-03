/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode
    } else {
      let temporaryVal = this.first;
      this.first = newNode;
      this.first.next = temporaryVal;
    }
    
    this.size += 1
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) {
      throw new Error("nothing in the Stack!!!!")
    }
      const removedNode = this.first;
      this.last = null;
      this.last = removedNode.next;
      this.size -= 1;
      return removedNode.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size != 0)
      return this.first.val
        }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } else {
      return false;
    }

  }
}

module.exports = Stack;
