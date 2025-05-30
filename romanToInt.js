/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    //roman to Int object
    let romanToIntObj = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D :500,
        M :1000
    };

    //get the input and separate it into an array
    let IntOutput = 0;
    inputArr = s.split('');
  
    let repetitionRule = 0      
/* 
    print I if input is 1
    print II if imput is 2
    print III if input is 3

*/
<<<<<<< HEAD
    inputArr.forEach((element, index , array ) => {

            
        if( element == 'I' && array[index - 1 ] == "I" && array[index + 1 ] == "I"){        
            
                        if(  element == 'I' ){
                                IntOutput = 1;
                        }

                        if( element == 'I' && array[index - 1 ] == "I" ){
                                IntOutput  = 2;
                        }

                        if(element == 'I' && array[index - 1 ] == "I" && array[index + 1 ] == "I"){
                                IntOutput  = 3;
                        }
                    //    IntOutput += romanToIntObj.I;
                    //    repetitionRule +=1;

                    //    if( repetitionRule > 3){
                    //     IntOutput = 3
                    //    }
            }

        

    /*  
        If I is before V, subtract 1 from 5, else add 1 to 5
        If I is before X, subtract 1 from 10, else add 1 to 10
    */  

            if(  element == 'V' ){       
                IntOutput = 5;
                if( array[ index - 1 ] == 'I' )             
                     IntOutput = IntOutput - 1;
            
            
                if( array[ index + 1 ] == 'I' )
                    IntOutput = IntOutput + 1;
            }


<<<<<<< HEAD
            /*If X is before L, subtract 10 from 50; else, add 10 to 50
    If X is before C, subtract 10 from 100, else add 10 to 100*/

             if( element == 'L' ){      
                IntOutput  = 50; 
                if( array[ index - 1 ] == 'X' ) {                         
                     IntOutput = IntOutput - 10;
                }
            
                if( array[ index + 1 ] == 'X'){               
                    IntOutput = IntOutput + 10;
                }
            }


            


            
=======
});

>>>>>>> b0b13e3a34e88c8afaa4313bd2658b1dcb3067ef
/*

    

    If C is before D, subtract 100 from 500; else, add 100 to 500
    If C is before M, subtract 100 from 1000, else add 100 to 1000    
    
    */

    });




    return IntOutput;
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('VI'));
console.log( romanToInt('LVIII'))
