// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function individualSum(a1, a2) {
  const size = a1.length > a2.length ? a1.length : a2.length;
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = (a1[i] || 0) + (a2[i] || 0);
  }
  return result;
}

const arr1 = [1, 0, 2, 3, 4];
const arr2 = [3, 5, 6, 7, 8, 13];

const result = individualSum(arr1, arr2);
console.log(`Expected Output: ${result}`);
