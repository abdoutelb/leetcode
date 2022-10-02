/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = new Map();
    result.set(nums[0],0);
    for(let i=1;i<nums.length;i++){ 
        if(result.has(target - nums[i])){
            return [result.get(target - nums[i]),i];
        }else{
            result.set(nums[i],i);
        }
    }
    return false;
    
};