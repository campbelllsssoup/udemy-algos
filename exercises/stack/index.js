// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

// My first solution

// concern: push exposes the structure as an array - allowing a user 
// to use methods that do not belong to this class Stack. I'm using
// methods that belong to the Array class, but I figure if I can 
// limit what a user can do with this custom Stack then it's alright.

class Stack {

  constructor() {
    this._structure = [];
  }

  push(arg) {
    this._structure.push(arg);
    return this._structure;
  }

  pop() {
    return this._structure.pop();
  }

  peek() {
    return this._structure[this._structure.length-1];
  }

}


let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

module.exports = Stack;
