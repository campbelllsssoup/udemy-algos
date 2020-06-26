// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this._stackA = new Stack; // true stack
    this._stackB = new Stack; // temp stack
  }

  add(record) {
    this._stackA.push(record);
  }

  remove() {
    while (this._stackA.peek()) {
      this._stackB.push(this._stackA.pop());
    }
    let el = this._stackB.pop();
    while (this._stackB.peek()) {
      this._stackA.push(this._stackB.pop());
    }
    return el;
  }

  peek() {
    while (this._stackA.peek()) {
      this._stackB.push(this._stackA.pop());
    }
    let el = this._stackB.peek();
    while (this._stackB.peek()) {
      this._stackA.push(this._stackB.pop());
    }
    return el;
  }


}

const q = new Queue;
q.add(1);
q.add(2);
console.log(q.remove());


module.exports = Queue;
