/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result = false;
    let map = new Set();
    for(var i=0;i<nums.length;i++){
        if(map.has(nums[i])){
           result = true;
           break;
           }else{
            map.add(nums[i]);
        }
    }
    return result;
};