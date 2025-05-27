/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //get the input and separate it into an array
    let IntegerArr = 0;
    inputArr = s.split('');
  

/* 
    print I if input is 1
    print II if imput is 2
    print III if input is 3

*/
inputArr.forEach((element, index , array ) => {
       if( element == 'I' ){
                IntegerArr += 1;   
        }

        if( array[ index ] === 'I' && array[index + 1 ] === 'V'){
            
        }

/*
    If I is before V, subtract 1 from 5, else add 1 to 5
    If I is before X, subtract 1 from 10, else add 1 to 10
*/


});

/*

    If X is before L, subtract 10 from 50; else, add 10 to 50
    If X is before C, subtract 10 from 100, else add 10 to 100

    If C is before D, subtract 100 from 500; else, add 100 to 500
    If C is before M, subtract 100 from 1000, else add 100 to 1000    
    
    */
    return IntegerArr;
};

console.log(romanToInt('I'));
