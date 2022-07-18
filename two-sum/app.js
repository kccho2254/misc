// TODO: find the indexes of two numbers in array nums[] that will add up to target

const { join } = require("path");
const { kill } = require("process");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {

    let j = 0;
    for (let i = 0; i < nums.length; i++) {

        j = (target - nums[i]);
        // 3 = 6 - 3
        // find the index that has value j 
        // i and j are at different indexes
        if (nums.includes(j) && i != nums.indexOf(j)) {
            return [i, nums.indexOf(j)];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
// expected: [0,1]
console.log(twoSum([3, 2, 4], 6));
// expected: [1,2]
console.log(twoSum([3, 3], 6));
// expected: [0,1]



