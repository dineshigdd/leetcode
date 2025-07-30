class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s , t) {
        //break the string into an array

        const tArr = t.split('');
        
        /*count # of occurance in each letter

        1. read the first element
        2. compare the element with the rest of elements
        3. if there is anothor occurance, increase the counter
        4. add both the element and counter in array of objectcs

        */  
       if( s.length === t.length ){
        let counter = 0;
        for( let i = 0; i < s.length ; i++ ){
             
            for( let r = 0; r < tArr.length;  r++ ){

                if( s[ i ] === tArr[ r ] ){
                    counter += 1;
                    tArr[ r ] = 0;                }
            }            
        }
        
        if( counter === t.length ){
            return true
        }else{
            return false
        }
        

    }else{
        return false;
    }

      
 

    }
}

const solution = new Solution();
console.log( solution.isAnagram("rat", "car") );