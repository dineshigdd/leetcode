class Solution {
    /***
     Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
     You may assume that every input has exactly one pair of indices i and j that satisfy the condition. Return the answer with the smaller index first.
     */
    twoSum(nums, target) {

        //get first element of the array
        //find the element that matches target = element -  arr[ j ]
        //read the index of that element ( which is j);
        //compare i with j
        //return [i, j]
        for( let i = 0; i < nums.length; i++ ){
            for( let j = i + 1; j < nums.length; j++ ){

                if(  nums[ i ]  + nums[ j ] === target  ){{
                    return [ i , j]
               }
            }
        }        
        }
    }

    twoSumHash(nums, target) {
        const map = {};  
        for( let i = 0; i < nums.length; i++ ){     
            const key  = nums[ i ];           
            const diff = target - key;
            
            if(map[ diff ] !== undefined){               
                console.log( map ) 
                return [ map[ diff ], i ]
            }                 
            
            map[ key ] = i;        
            
            
        }      

        
      
    }
}

const solution = new Solution();
// console.log( solution.twoSum( [3,4,5,6], 7 ))
// console.log( solution.twoSum( [4,5,6], 10 ))
// console.log( solution.twoSum( [1,2,3,5,6], 8 ))

console.log( solution.twoSumHash( [3,5,4,6], 7 ) )
// console.log( solution.twoSumHash( [4,5,6], 10 ))
// console.log( solution.twoSumHash( [1,2,3,6], 8 ))
// console.log( solution.twoSumHash( [2,1,5,3], 4 ))

