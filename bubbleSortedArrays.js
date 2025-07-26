const bubbleSortedArrays = ( arr1 , arr2 ) => {
    let combinedArr = [];
    //MERGE TWO INPUT ARRAYS
    for( let i = 0 ; i < arr1.length ; i++ ){
        combinedArr.push( arr1[i])
    }
    

     for( let j = 0 ; j < arr2.length ; j++ ){
        combinedArr.push( arr2[j])
    }

   
    for( let i = 0; i < combinedArr.length   ; i++ ){
        let temp = combinedArr[ 0 ];

        for( let j = 1 ; j < combinedArr.length  ; j++ ){
            
            if(temp > combinedArr[ j ]){
                combinedArr[ j - 1 ] = combinedArr[ j ];
                combinedArr[ j ] = temp;
            }else{
                temp = combinedArr[ j ]               
            }
          
        }
        
    }

    return combinedArr;
    
}   


console.log(bubbleSortedArrays([5,3,2], [4, 6, 0]));
// Expected: [2, 3, 3, 5, 5]
