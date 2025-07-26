const reverseString = function( str ){
    let reversedStr = [];
    //check if the length of the array is ODD or even
  
        //loop until the end of the string

        for( let i = str.length - 1 ; i >=0 ; i-- ){
                reversedStr.push( str.at(i) )
        }


    return reversedStr.join('')
}


console.log( reverseString('hsesham'))//string with even number of letters
console.log( reverseString('ierdnA')) //string with odd number of letters