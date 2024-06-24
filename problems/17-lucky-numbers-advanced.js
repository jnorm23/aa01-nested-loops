/*
Write a function luckyNumbers(matrix) that takes in a 2-dimensional array
(matrix) and returns all lucky numbers in any order. A lucky number is the
minimum element in its row and the maximum in its column.
*/


// Your code here 
function luckyNumbers(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let minInRow = Math.min(...matrix[i]);
        let columnIndex = matrix[i].indexOf(minInRow);
        let isMaxInColumn = true;
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][columnIndex] > minInRow) {
                isMaxInColumn = false;
                break;
            }
        }
        if (isMaxInColumn) {
            result.push(minInRow);
        }
    }

    return result;
}
// matrix = [[ 5,  9, 21],
//           [ 9, 19,  6],
//           [12, 14, 15]]

// console.log(luckyNumbers(matrix)); // [12]

// matrix = [[ 5, 10,  8,  6],
//           [10,  2,  7,  9],
//           [21, 15, 19, 10]]

// console.log(luckyNumbers(matrix)); // [10]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = luckyNumbers;
