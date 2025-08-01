class Solution{


    firstRecurringNum( arr ){   
        
        let hashMap = {};
        //first create a hash map
        for( let i = 0; i < arr.length ; i++ ){

            const num = arr[ i ];            
            
           
            //solution 1:
            // if( hashMap[ num ] ){
            //     hashMap[ num ]++;

            //     if( hashMap[ num ] > 1 ){
            //         return  num ;
            //     }
            // }else{
            //     hashMap[ num ] = 1;
            // }

            //solution 1 improved:
             // hashMap[ num ] =  ( hashMap[ num ] || 0 ) + 1;
            
            // if( hashMap[ num ] > 1 ){
            //     return num
            // }

            //better solution 
            if( hashMap[ num ] !== undefined ){
                return num;
            }else{
                hashMap[ num ] = i;
            }
            console.log( hashMap)
        }
    
        return undefined;
        
    }
}

const solution = new Solution();
// console.log( solution.firstRecurringNum( [2,5,1,2,3,5,1,2,4]))
// console.log( solution.firstRecurringNum( [2,1,1,2,3,5,1,2,4]))
// console.log( solution.firstRecurringNum( [2,3,4,5]))
console.log( solution.firstRecurringNum( [2,5,5,2,3,5,1,2,4]))