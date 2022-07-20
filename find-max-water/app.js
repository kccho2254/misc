// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

/**
 * @param {number[]} height
 * @return {number}
 * height = [1,8,6,2,5,4,8,3,7];
 */

// Find the greatest number from multiplying the shorter column number with the length
// distance between each index is the difference between each index (if negative multiply by -1)

var maxArea = function (height) {

    let i = 0;
    let j = height.length - 1;
    let water = 0;

    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = 1; j < height.length; j++) {
    //         // starting the second iterator at 1 means that the index will not be compared to itself
    //         // ending the second iterator 
    //         // width is the difference of each value's index
    //         // compare each column length and return the shorter column
    //         num = (j - i) * (Math.min(height[i], height[j]));

    //         if (num > water) {
    //             water = num;
    //         }
    //     }
    // }

    while (i < j) {
        water = Math.max(water, ((j - i) * Math.min(height[i], height[j])))

        if (height[i] < height[j]) {
            i += 1
        }
        else {
            j -= 1
        }
    }
    return water;
};

// set i to 0 and j to height.length
// while i<j
// num = j-i * math.min of each one
// if num > water
// water = num
// i++

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// expected output: 49
console.log(maxArea([1, 1]));
// expected output: 1
console.log(maxArea([0, 2]));
