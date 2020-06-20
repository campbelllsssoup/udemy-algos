// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }

  add(record) {
    this.queue.unshift(record);
  }

  remove() {
    return this.queue.pop();
    
  }

  show() {
    console.log(this.queue);
  }

}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.remove()); // => 1
console.log(q.remove()); // => 2
console.log(q.remove()); // => 3


module.exports = Queue;
