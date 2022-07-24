/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    // const map = nums.map((a) => (Math.pow(a,2)));
    // return map.sort((a,b) => (a-b));
    // These two lines are also a solution. Uncomment them and comment out lines 11-31.
    
    let re = new Array(nums.length);
        let k=nums.length-1;
        let i=0;
        let j=nums.length-1;
        while(i<=j)
        {
            let a=nums[i]*nums[i];
            let b=nums[j]*nums[j];
            if(a>b)
            {
                re[k]=a;
                i++;
            }
            else
            {
                re[k]=b;
                j--;
            }
            k--;
        }
        return re;
};

// create new array
// set k equal to array length
// set i to 0, j to array length
// while i<j
// square each iteration of nums[i] and nums[j]
// set the bigger int to new array[k] and add 1 to i/j
// k--
// return the array