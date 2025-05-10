var isPalindrome = function(x) {
    //get the input
    // compare first number of the interger to the last number
    //if they are the same numebr , go the next number from both ends
    //keep repeating this prcocess until middle number is reached


    let numArr = x.toString().split('').map(Number) 
    //convert a number into an array in JavaScript is by using the split() method directly on the string representation of the number. 
    // This method involves converting the number to a string, splitting the string into an array of characters, a
    // nd then converting each character back into a number.

    
    for( i = 0; i < numArr.length/2 ; i++ ){
        
        if( numArr[ i ] !== numArr[ numArr.length - 1 - i ] ){
            return false
        }
    }

    return true;
    
};
//test cases
console.log(isPalindrome(121)) //true
console.log(isPalindrome(-121)) //false
console.log(isPalindrome(10)) // false