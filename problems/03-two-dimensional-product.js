/*
Write a function twoDimensionalProduct(array) that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.
*/

// Your code here 
function twoDimensionalProduct(arr) {
    let product = 1;                                 // initialize a variable 'totalProduct' to 1 since I need to multiply, to hold the total product of all elements in the 2D array
    for (let i = 0; i < arr.length; i++) {           // outer loop iterates over each subarray in the 2D array.
      for (let j = 0; j < arr[i].length; j++) {      // inner loop iterates over each element in the current subarray
        product *= arr[i][j];                        // the current element arr[i][j] is multiplied to product in each iteration of the inner loop
      }
    }
    return product;                                  // the product is returned as the result after all elements have been processed
  }
  
// let arr1 = [[6, 4], [5], [3, 1]];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [[11, 4], [2]];
// console.log(twoDimensionalProduct(arr2)); // 88

// let arr3 = [
//   [-9, 8, 4],
//   [8, 2],
// ];
// console.log(twoDimensionalProduct(arr3)); // -4608

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = twoDimensionalProduct;
