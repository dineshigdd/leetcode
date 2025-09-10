class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     */
   

    areAnagrams(str1, str2) {
        if (str1.length !== str2.length) {
            return false;
        }

        // if( str1 === '' || str2 === ''){
        //     return false
        // }
        const sorted1 = str1.split('').sort().join('');
        const sorted2 = str2.split('').sort().join('');
        return sorted1 === sorted2;
    }

    /*
    find the anagram
    put anagram to an subarray
    flag the anagram



    */
    groupAnagrams(strs) {
       let output = [];
       


        if( strs.length === 1 ){
            output.push( strs );
            return output;
        }
          

        for( let i = 0; i < strs.length  ; i++ ){    
            let subArray = [];
            
              
                for( let j = i + 1; j < strs.length; j++ ){
                    console.log( `compare ${ strs[i] } with ${ strs[j]}`)

                    if( this.areAnagrams(strs[i], strs[j] ) ){ //find the angram
                        subArray.push(strs[i] , strs[j])     //put into an sub array                   
                        strs[j] = '*';          //flag the anagram
                    }
                }
             
            // subArray.push(strs[i] )
             output.push( subArray)
        }
       
        return output
    }
   
}


const solution = new Solution();
// console.log( solution.groupAnagrams(["act","tap","cat","pat"]));
// console.log( solution.groupAnagrams(["x"]));
console.log( solution.groupAnagrams(["cat", "dog", "act", "stop"]));
// console.log(solution.areAnagrams('cat','cat'))
// console.log( solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]