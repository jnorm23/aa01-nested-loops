/*
Write a function maxInMatrix(matrix) that takes in a 2-dimensional array
(matrix) and returns the largest value in the matrix. The matrix contains at
least one value.
*/

function maxInMatrix(matrix) {
  let max = -Infinity;                               // initialize a variable 'max' to '-Infinity' to make sure that any number in the matrix will be larger
  for (let i = 0; i < matrix.length; i++) {          // outer loop iterates over each subarray in the matrix
    for (let j = 0; j < matrix[i].length; j++) {     // inner loop iterates over each element in the current subarray
      if (matrix[i][j] > max) {                      // check if the current element matrix[i][j] is greater than max in each iteration of the inner loop
        max = matrix[i][j];                          // if it is update max to this value
      }
    }
  }
  return max;                                        // return 'max' after all elements have been processed 
}

// matrix = [
//   [11, 2, -99],
//   [20, 19, 10],
//   [47, 72, 56],
// ];

// console.log(maxInMatrix(matrix)); // 72

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxInMatrix;
