class Stack {
    constructor() {
        this.arr = [];    
       
    }

    peek() {
        return this.arr[ this.arr.length - 1];     
    }

    push(value) {
        this.arr.push( value );     
        return this;
    }

    pop() { 
      
         this.arr.pop()
         return this;
       
      
    }

    
   
   
}

const myStack = new Stack();
myStack.push('first')
myStack.push('second')
myStack.push('third')
console.log( myStack.pop())
console.log( myStack.pop())
console.log( myStack.pop())
console.log( myStack.pop())

// console.log( myStack.pop())
// console.log( myStack.peek())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( "top:" + myStack.peek())