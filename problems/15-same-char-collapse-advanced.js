/*
Write a function sameCharCollapse that takes in a string and returns a collapsed
version of the string. To collapse the string, we repeatedly delete 2 adjacent
characters that are the same until there are no such adjacent characters. If
there are multiple pairs that can be collapsed, delete the leftmost pair.

For example, we take the following steps to collapse "zzzxaaxy":
zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

// Your code here 
function sameCharCollapse(str) {
    let collapsed = str; 
    let i = 0;
    while (i < collapsed.length - 1) {
        if (collapsed[i] === collapsed[i + 1]) {
            collapsed = collapsed.slice(0, i) + collapsed.slice(i + 2); // Remove the pair
            i = 0; 
        } else {
            i++; 
        }
    }

    return collapsed;
}
// console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// // because zzzxaaxy -> zxaaxy -> zxxy -> zy
// console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sameCharCollapse;
