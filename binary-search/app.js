

// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
// var solution = function (isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function (n) {

//         let low = 1;
//         let high = n;
//         while (low < high) {
//             let mid = low + Math.floor((high - low) / 2);
//             if (isBadVersion(mid) === true) {
//                 high = mid;
//             } else {
//                 low = mid + 1;
//             }
//         }

//         return high;
//     };
// };


// var solution2 = function (isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function (n) {

//         let low = 1;
//         let high = n;
//         while (low < high) {
//             let mid = low + Math.floor((high - low) / 2);
//             if (high - mid == 1) {
//                 return mid;
//             }
//             else if (isBadVersion(mid) === true) {
//                 high = mid - 1;
//             } else {
//                 low = mid;
//             }
//         }
//         return high;
//     };
// };


console.log(Math.floor(5/2));