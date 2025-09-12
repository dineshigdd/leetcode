class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      
        const res = new Map(); //mapping character count to list of anagrmas

        for( let i = 0; i < strs.length ; i++ ){
            let count = new Array(26).fill(0)

            for( let j = 0 ; j < strs[i].length; j++ ){
                count[  strs[i][j].charCodeAt(0) - "a".charCodeAt(0) ]+=1;
            }
           
            const key = count.join(',');
           
            if (!res.has(key)) {
                res.set(key, []);
            }
            
            res.get(key).push(strs[i]);
        }
        console.log( res)
       return Array.from(res.values());
    }
}

// groupAnagrams(strs) {
//   const res = new Map();

//   for (let i = 0; i < strs.length; i++) {
//     const s = strs[i];
//     const count = new Array(26).fill(0);

//     for (let j = 0; j < s.length; j++) {
//       const c = s[j];
//       count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }

//     const key = count.join(',');
//     if (!res.has(key)) {
//       res.set(key, []);
//     }
//     res.get(key).push(s);
//   }

//   return Array.from(res.values());
// }


const solution = new Solution();
// console.log( solution.groupAnagrams(["act","tap","cat","pat"]));
// console.log( solution.groupAnagrams(["x"]));
console.log( solution.groupAnagrams(["act","cat"]) )
// console.log( solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]