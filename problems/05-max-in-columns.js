/*
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix)
and returns an array containing the maximum value in each column.
The return array's length should be equal to the number of columns, such that
each of its elements is the max value in a column.
*/

function maxColumn(matrix) {
  if (matrix.length === 0) return [];                      // if the input matrix is empty, return an empty array

  const numRows = matrix.length;                           // determine the number of rows 'numRows' in the matrix
  const numCols = matrix[0].length;                        // determine the number of columns 'numCols' in the matrix
  const maxValues = new Array(numCols).fill(-Infinity);    // create an array 'maxValues' with the same length as the number of columns
                                                           // filled with '-Infinity' to handle any initial comparisons
  for (let col = 0; col < numCols; col++) {                // use a nested loop to iterate through each column and row
      for (let row = 0; row < numRows; row++) {
          if (matrix[row][col] > maxValues[col]) {         // for each element in the column compare it with the current maximum value stored in 'maxValues' for that column 
              maxValues[col] = matrix[row][col];           // and update accordingly
          }
      }
  }

  return maxValues;                                        // return the 'maxValues' array containing the maximum values after iterating through all elements for each column
} 

// matrix = [
//   [5, 9, 21],
//   [9, 19, 6],
//   [12, 14, 15],
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxColumn;
