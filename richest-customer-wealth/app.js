/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = (accounts) => {

    let maxSum = 0;

    for (let i of accounts) {

        let sum = i.reduce((a, b) => a + b, 0);
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};

var maximumWealth2 = function (accounts) {

    return Math.max(...accounts.map(account => account.reduce((a, b) => a + b)));

};

// console.log(maximumWealth([[1,2,3],[3,2,1]]));
// console.log(maximumWealth([[1,5],[7,3],[3,5]]));
// console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));

// console.log(maximumWealth2([[1,2,3],[3,2,1]]));
// console.log(maximumWealth2([[1,5],[7,3],[3,5]]));
// console.log(maximumWealth2([[2,8,7],[7,1,3],[1,9,5]]));


console.log(5/2);
// $ node app.js