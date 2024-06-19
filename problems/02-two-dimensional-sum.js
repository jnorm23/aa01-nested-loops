/*
Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and
returns the total sum of all numbers.
*/

// Your code here 
function twoDimensionalSum(arr) {
    let total = 0;   //initializing a variable 'total' to 0. 'total' will be the sum of all elements in the 2D array
    for (let i = 0; i < arr.length; i++) {    //outer loop iterates over each subarray in the 2D array
      for (let j = 0; j < arr[i].length; j++) {   //inner loop iterates over each element in the current subarray 
        total += arr[i][j];    //in each iteration of the inner loop, the current element 'arr[i][j]' is added to 'total'
      }
    }
    return total;  //return the totalSum after all elements have been processed
}
// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalSum;
