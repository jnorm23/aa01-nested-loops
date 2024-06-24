/*
Write a function zanyZip that accepts two arrays as arguments. The function
should return a two dimensional array with subarrays of length 2 that contain
elements at corresponding indices from the input arrays. If one of the arrays is
shorter than the other, then substitute null for the missing elements.
*/

// Your code here 
function zanyZip(arr1, arr2) {
    let result = [];

    let maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        let elem1 = (i < arr1.length) ? arr1[i] : null;
        let elem2 = (i < arr2.length) ? arr2[i] : null;
        result.push([elem1, elem2]);
    }

    return result;
}
// console.log(zanyZip([1, 2], ["eins", "zwei", "drei", "vier"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ null, 'drei' ], [ null, 'vier' ] ]

// console.log(zanyZip([1, 2, 3, 4], ["eins", "zwei", "drei"]));
// // [ [ 1, 'eins' ], [ 2, 'zwei' ], [ 3, 'drei' ], [ 4, null ] ]

// console.log(zanyZip(["alef", "bet"], ["alpha", "beta"]));
// // [ [ 'alef', 'alpha' ], [ 'bet', 'beta' ] ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = zanyZip;
