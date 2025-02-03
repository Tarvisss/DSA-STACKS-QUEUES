/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // Step 1: Create a new Node with the value passed as an argument
    const newNode = new Node(val);

    // Step 2: Check if the queue is currently empty (i.e., `this.first` is null)
    if (this.first === null) {
        // If the queue is empty, set both the `first` and `last` pointers to the new node
        this.first = newNode  // The first element of the queue is the new node
        this.last = newNode;   // The last element of the queue is also the new node (since it's the only one)
    } else {
        // Step 3: If the queue is not empty, we need to add the new node at the end (enqueue it)
      
        // Case 1: Check if the queue only has one node (i.e., `this.first.next` is null)
        if (this.first.next === null) {
            // If there is only one node, we update `last` to the new node
            this.last = newNode;
            // And we link the first node to the new node (making it the second node)
            this.first.next = this.last;
        } else {
            // Case 2: If the queue has more than one node, just add the new node at the end
            this.last.next = newNode;  // Link the current last node to the new node
            this.last = newNode;       // Update the `last` pointer to the new node
        }
    }
    
    // Step 4: Increment the `size` to reflect the addition of a new node in the queue
    this.size += 1;
}

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if ( this.size === 0) {
      throw new Error("Nothing in the queue"); 
    }
    const removedNode = this.first;
    
    // trick to remove the first item of the queue
    this.first = null;
    this.first = removedNode.next;
    this.size -= 1;

    return removedNode.val;
  }

  

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
