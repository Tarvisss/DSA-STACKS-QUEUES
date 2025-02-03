const Queue = require("./queue");
const Stack = require("./stack")

// let nn = new Node(123);
// console.log(nn);


// let ll = new Queue();
// console.log(ll);

// ll.enqueue(123);
// console.log(ll);

// ll.enqueue(456);
// console.log(ll);

// ll.enqueue(3745734875);
// console.log(ll);

// // dequeuedVal = ll.dequeue();
// // console.log(ll);
// // console.log(dequeuedVal);

// ll.enqueue('Diane');
// console.log(ll);

// ll.enqueue('Tarvis');
// console.log(ll);

// // dequeuedVal = ll.dequeue();
// // console.log(ll);
// // console.log(dequeuedVal);

// peekVal = ll.peek();
// console.log(peekVal);

// empty = ll.isEmpty();
// console.log(empty);

let lls = new Stack();

console.log(lls);

lls.push('Tarvis')
console.log(lls);

lls.push('Diane')
console.log(lls);

lls.push('Cody')
console.log(lls);

lls.push('Lara')
console.log(lls);

// popVal = lls.pop();
// console.log(popVal);

let peekVal = lls.peek();
console.log(peekVal);
console.log(peekVal);
console.log(peekVal);