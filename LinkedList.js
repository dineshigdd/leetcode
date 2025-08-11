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
}


const myLinkedList = new LinkedList(5);
console.log(myLinkedList);