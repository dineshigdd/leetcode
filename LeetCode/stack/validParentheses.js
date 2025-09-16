/*

20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:Input: s = "()"   Output: true

Example 2: Input: s = "()[]{}" Output: true

Example 3: Input: s = "(]"  Output: false

Example 4: Input: s = "([])"  Output: true

Example 5: Input: s = "([)]" Output: false

 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/
class Node{
    constructor( value ){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top
    }

    push( value ){
        
        const mynode = new Node( value );

        if( this.length === 0 ){
            this.top = mynode;
            this.bottom  = mynode;
        }else{
            mynode.next = this.top;
            this.top = mynode;        
        }

        this.length++;
        return this;
    }

    pop(){
        if( this.bottom === this.top ){
            return null
        }

        const popedValue = this.top.value;
        this.top = this.top.next;
        this.length--;
        return popedValue;
    }

   printList(){
        let currentNode = this.top;
        let str = []
        while( currentNode.next != null ){
            currentNode = currentNode.next 
            str.push( currentNode.value )
        }
        return str.join();
   }
}


class Solution{   

    isValid( s ){
        
        let myStack = new Stack();        
        let result = false;

        //each character in the string to a node in the stack
        for( const c of s ){
           
            if( c === '(' ||   c ===  '[' || c  ===  '{'){
               
                 myStack.push(c);
            } else
            {
             
               
                let openPara = myStack.pop();   
        
                if((  openPara === '(' && c === ')' ) || 
                    ( openPara === '[' && c === ']') ||
                    ( openPara === '{' && c === '}')){
                    result = true;
                }   

            }
        }
        

        return result;

    };  
}


const mySolution = new Solution();
console.log( mySolution.isValid("()[]{}")) //true
console.log( mySolution.isValid("(]")) //false
console.log( mySolution.isValid("([])")) //true
console.log( mySolution.isValid("([)]")) //false



