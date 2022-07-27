// rotate a 100,000 length array forward 55,000 places
// or rotate backward 45,000 places

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    a = nums.length;
    b = nums.length - k;
    if (nums.length > k) {

        while (b <= a) {

            nums.splice(0, 0, nums[nums.length - 1]);
            a++;
        }
        nums.splice(c, c);

    } else {

        for (let i = 0; i < k; i++) {

            nums.splice(0, 0, nums[nums.length - 1]);
            nums.pop(nums.length - 1);
        }
    }
};

// nums = "----->-->"; k =3
// result = "-->----->";

// reverse "----->-->" we can get "<--<-----"
// reverse "<--" we can get "--><-----"
// reverse "<-----" we can get "-->----->"
let num = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
const reverse = (nums, i, j) => {

    temp = 0;
    while (i < j) {

        temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
    return nums;
}
reverse(num, 0, num.length - 1);
reverse(num, 0, k - 1);
reverse(num, k, num.length - 1);
console.log(num );