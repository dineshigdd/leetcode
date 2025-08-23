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
    let IntOutput = [];
    inputArr = s.split('');

    inputArr.forEach((element, index , array ) => {

                //replace all the roman numerals with digits
                switch( element ){
                    case 'I':
                        IntOutput[ index ] = romanToIntObj.I;
                        break;
                    case 'V':
                        IntOutput[ index ] = romanToIntObj.V;
                        break;
                    case 'X':
                          IntOutput[ index ] = romanToIntObj.X;
                        break;
                    case 'L':
                          IntOutput[ index ] = romanToIntObj.L;
                        break;
                    case "C":
                          IntOutput[ index ] = romanToIntObj.C;
                        break;
                    case "D":
                          IntOutput[ index ] = romanToIntObj.D;
                        break;
                    case "M":
                          IntOutput[ index ] = romanToIntObj.M;
                        break;
                }
    })

    console.log( IntOutput)
    let output = 0;
   
    //seperating digits that will be subjected additive principle
     let addOutput = IntOutput[0];
     let startIndex = 0;
     IntOutput.forEach((element, index, array) => {
        /*  I can be placed before V (5) and X (10) to make 4 and 9. 
            X can be placed before L (50) and C (100) to make 40 and 90. 
            C can be placed before D (500) and M (1000) to make 400 and 900.*/
            
            // console.log( element)
            // console.log( output)
        //additve principle
            if( array[ index + 1 ] <= element ){
                addOutput = addOutput +  array[ index + 1 ];
            }

            // if( array[ index + 1 ] > element ){
            //     output =  array[ index + 1 ] - output
            // }

            startIndex = index;
    })

//to do
// get the part of the IntOutput array that has the subtractive pronciple

    let subOutput = IntOutput[startIndex];  
    
     IntOutput.forEach((element, index, array) => {
        /*  I can be placed before V (5) and X (10) to make 4 and 9. 
            X can be placed before L (50) and C (100) to make 40 and 90. 
            C can be placed before D (500) and M (1000) to make 400 and 900.*/
            
            // console.log( element)
            // console.log( output)
            //subtractive principle          
            if( array[ index + 1 ] > element ){
                subOutput =  array[ index + 1 ] - subOutput
            }

          
    })


    return output;
};

// console.log(romanToInt('VIII'));
// console.log(romanToInt('IV'));
// console.log(romanToInt('VI'));
// console.log( romanToInt('LVIII'))
console.log( romanToInt('LXXXIV'))
// console.log( romanToInt('MCMXCIV'))
