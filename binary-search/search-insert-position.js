/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let lo = 0;
    let hi = nums.length-1;
    while (lo < hi) {
        
        let mid = Math.round((lo+hi)/2);
        
        if (nums[mid]<target){
            lo = mid;
        } else {
            hi = mid-1;
        }
        
    }
    return ((nums[hi] == target)?nums.indexOf(hi):-6);
};