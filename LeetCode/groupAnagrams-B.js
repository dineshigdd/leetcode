class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /*
        1. read an element of the input array
        2. compare the element with the other elements
            2.a read the first letter of the string
            2.b compare each letter with the letters of the next string of the input array
        3. if there is a matching element, copy the matching element to a subarray
        4. do steps 1 - 4 until the end of the Input array;
        5. At the end of the Input array, insert all the subarrays to an output array

        */

        let output  = [];
        output.push( );
        let counter = 0;
        if( strs.length === 1 ){
                    output.push( strs);
                    return output

        }

        for( let i = 0; i < strs.length -1;i++ ){
             let subarray = [];     

            //   if(strs[i] ==='*'){
                    // i++;
                {
                    subarray.push( strs[i] )               

                    for( let j = 0 ; j < strs[i].length; j++ ){      

                            if( strs[ i ] === strs[ i + 1 ]){
                                console.log( "compare "+ strs[i][j] + " with " +  strs[ i + 1][k]);
                                    for( let k = 0; k < strs[i + 1].length ; k++ ){
                                        // console.log(  strs[i + 1][k]) 
                                        
                                     
                                        if( strs[i][j] === strs[j + 1][k]){ 
                                            counter++;
                                        }else{
                                            console.log("No")
                                        }

                                    
                                    }
                            
                                    if( counter === strs[i + 1].length ){
                                        subarray.push(strs[i + 1])
                                        i++;
                                            // strs[ i + 1]='*'
                                        counter = 0;
                                    }

                            }     
                  
                            
                        
                        
                            //if there no matching anagram , move to the next element of the array
                        
                    }
             output.push(subarray)
        }
        }
        return output
    }
}


const solution = new Solution();
// console.log( solution.groupAnagrams(["act","tap","cat","pat"]));
// console.log( solution.groupAnagrams(["x"]));
console.log( solution.groupAnagrams(["act","cat"]));
// console.log( solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]