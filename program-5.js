/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function flowerbed(array, n) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      if (array[i - 1] === 0 && array[i + 1] === 0) {
        count++;
      }
    }
  }
  return count >= n;
}

let planted = [1, 0, 0, 0, 1];
let n = 2;
const result = flowerbed(planted, n);
console.log(`Output: ${result}`);
