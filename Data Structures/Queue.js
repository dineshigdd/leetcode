class Node {
    constructor( value ){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        //get the first item        
        return this.first;
    }

    enqueue( value ){
        const myNode = new Node( value );
        
        if( this.length === 0 ) {
            this.first = myNode
            this.last = myNode;
            
        }else{
             this.last.next = myNode
             this.last = myNode;             
        
        }

       
        this.length++;
        return this;
        
    }

    dequeue(){
        // console.log( this.first.next)
        if( !this.first ){
            return null;
        }
        if( this.first === this.last ){
            this.last = null;
        }

        this.first = this.first.next;
        this.length--
        return this;
    }
}


const myQueue = new Queue();
myQueue.enqueue('first');
myQueue.enqueue('second');
myQueue.enqueue('third');
myQueue.enqueue('fourth');
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log( myQueue)

// console.log( myQueue.dequeue())
// console.log( myQueue.peek())
