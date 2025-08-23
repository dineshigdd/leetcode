var runningSum = function(nums) { 
   let sum=[];
    for( let i = 0;i < nums.length; i++ ){            
         let total = nums[i];        
            for( r = 0; r < i ; r++ ){
                    let temp = total;
                    temp = temp + nums[ r ];
                    total = temp;                    
                  
            }
           sum.push(total);
        
    }
   
   
   return sum
};