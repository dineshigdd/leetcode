class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s , t) {
        //break the string into an array

        
        /*count # of occurance in each letter

        1. read the first element
        2. compare the element with the rest of elements
        3. if there is anothor occurance, increase the counter
        4. add both the element and counter in array of objectcs

        */  
       let sMap = {};
       let tMap = {};

       if( s.length !== t.length ){
            return false
       }
        

       for(let i = 0; i < s.length ; i++ ){         

            let sChar = s.at(i );

            
            sMap[ sChar ] = (sMap[ sChar ] || 0 ) + 1;


             let tChar = t.at(i );

            tMap[ tChar ] = (tMap[ tChar ] || 0)  + 1;        
            
       }

       
       for( const char in sMap ){
        
            if( sMap[ char ] !==  tMap[ char ] || 0 ){
                return false
            }
             
       }

       return true;

    }
}

const solution = new Solution();
console.log( solution.isAnagram("carracs", "racecar") );