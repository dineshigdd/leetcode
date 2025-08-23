/* let myLinkedList  = {
    head:{
        value: 5,
        next: {
            value:10,
            next:{
                valueL:4,
                next:null
            }
        }
    }   
}
*/

class DoublyLinkedList {
    constructor( value ){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        
        this.tail = this.head;
        this.length = 1;//optional, to keep track of the length of the linked list
    }

    append( value ){           
        const newNode = { value: value, next: null , prev:null };        
        newNode.prev = this.tail;
        this.tail.next = newNode;        
        this.tail = newNode;        
        this.length++;
       
        return this;
    }

    prepend( value ){
        const newNode = { value: value, next: null , prev: null };
        this.head.prev = newNode;
        newNode.next = this.head; //or you can do const newNode = { value: value , next: this.head }
        this.head = newNode;
        this.length++;
        return this;
    }

    insert( index , value ){

        //if the index is greater than the length of the list,new node will be appended
        if( index >= this.length ){
            return this.append(value)
        }
        
        //insert operation
        const newNode = { value: value, next: null , prev: null };

        //get the node before the index where we want to insert the new node
        const leader = this.traverseToIndex(index  - 1 );
        const follower = leader.next;          
        leader.next = newNode
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
      
        /*you can also do the following if you DO NOT want to hold the leader.next in a variable
        
        newNode.next = leader.next;
        leader.next = newNode

        */

        this.length++;
          console.log( this )

    }

    remove( index ) {

        if( index === 0 ){
            return this.head = this.head.next
        }

        if( index > this.length ){
            const currrentNode= this.traverseToIndex( this.length - 2  );
            currrentNode.next = null;
        }else{
             const leader = this.traverseToIndex( index - 1)
             const unwantedNode = leader.next;
             leader.next = unwantedNode.next;        
        }
       
        
        this.length--;
    }


    traverseToIndex( index ){
        let currrentNode = this.head;
         let counter  = 0;
          while(  counter !== index ){
            
            currrentNode = currrentNode.next;
            counter++;
            
        }
        
        return currrentNode;
    }

   
    printList(){
        const array= [];
        let currrentNode = this.head;
        while( currrentNode !== null ){
            array.push( currrentNode.value)
            currrentNode = currrentNode.next;
        }
        return array;
    }

    reversePrintList(){
        const array = [];
        let currrentNode = this.tail;
        while( currrentNode !== null ){
             array.push( currrentNode.value)
            currrentNode = currrentNode.prev
        }
        return array
    }
}


const myDoublyLinkedList = new DoublyLinkedList(10);
// console.log(myLinkedList);

myDoublyLinkedList.append( 5 )
myDoublyLinkedList.append( 16 )
myDoublyLinkedList.prepend( 1 )
myDoublyLinkedList.insert( 1, 99 );
// myLinkedList.insert( 20, 88);

// console.log(myDoublyLinkedList);

// myLinkedList.remove(10);
console.log(myDoublyLinkedList.printList());
console.log( myDoublyLinkedList.reversePrintList())