class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;     
       
    }

    peek() {
        return this.top;
    }

    push(value) {
       const mynode = new Node(value)

       if( this.length ===  0){
            this.top = mynode;
            this.bottom = mynode;
       }else{
            const holdingPointer = this.top;
            this.top = mynode;
            this.top.next = holdingPointer
     
        }
            this.length++;     
    }

    pop() {
     
       if( this.length !== 0 ){         
            this.top = this.top.next;
            this.length--;
            return this;
         
         //if you wan to return the poped item 
         /*
         const itemTobePoped = this.top;
         this.top = this.top.next;
         this.length--;
         return itemTobePoped.value;

         */
       }else if( this.top === this.bottom ){
            // console.log( this.top)
            //  console.log( "bottom")
            //  console.log(  this.bottom)
            return null;
       }
      
    }

    //isEmpty
   
   
}

const myStack = new Stack();
myStack.push('first')
myStack.push('second')
myStack.push('third')
myStack.push('fourth')
console.log( myStack)
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( myStack.peek())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( myStack.pop())
// console.log( "top:" + myStack.peek())