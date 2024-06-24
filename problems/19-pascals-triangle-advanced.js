/*
Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top
of the pyramid is the number 1. To generate further levels of the pyramid, every
element is the sum of the element above and to the left with the element above
and to the right. Non-existing elements are treated as 0 when calculating the
sum.

Write a function pascalsTriangle that accepts a positive number, n, as an
argument and returns a 2-dimensional array representing the first n levels of
Pascal's triangle.

For example, here are the first 5 levels of Pascal's triangle:
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
*/

// Your code here 
function pascalsTriangle(n) {
    if (n <= 0) return []; 
    let triangle = [];
    triangle.push([1]);
    
    for (let i = 1; i < n; i++) {
        let currentLevel = [];
        for (let j = 0; j <= i; j++) {
            let leftVal = (j > 0) ? triangle[i - 1][j - 1] : 0;
            let rightVal = (j < triangle[i - 1].length) ? triangle[i - 1][j] : 0;
            let sum = leftVal + rightVal;
            currentLevel.push(sum);
        }
        triangle.push(currentLevel);
    }
    
    return triangle;
}
// console.log(pascalsTriangle(5));
/*
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
*/

// console.log(pascalsTriangle(7));
/*
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1]
]
*/

// console.log(pascalsTriangle(-1));
/*
[]
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pascalsTriangle;
