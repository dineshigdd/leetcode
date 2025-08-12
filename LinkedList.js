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

class LinkedList{
    constructor( value ){
        this.head = {
            value: value,
            next: null        
        }
        
        this.tail = this.head;
        this.length = 1;//optional, to keep track of the length of the linked list
    }

    append( value ){
           
        const newNode = { value: value, next: null }
        this.tail.next = newNode;        
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend( value ){
        const newNode = { value: value, next: null };
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
        const newNode = { value: value, next: null };

        //get the node before the index where we want to insert the new node
        const leader = this.traverseToIndex(index  - 1 );
        const holdingPointer = leader.next;          
        leader.next = newNode
        newNode.next = holdingPointer;

        /*you can also do the following if you DO NOT want to hold the leader.next in a variable
        
        newNode.next = leader.next;
        leader.next = newNode

        */

        this.length++;

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
}


const myLinkedList = new LinkedList(10);
// console.log(myLinkedList);

myLinkedList.append( 5 )
myLinkedList.append( 16 )
myLinkedList.prepend( 1 )
myLinkedList.insert( 2, 99 );

myLinkedList.insert( 20, 88);
console.log(myLinkedList.printList());