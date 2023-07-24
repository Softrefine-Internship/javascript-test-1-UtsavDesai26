// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

function margeArray(a1, a2) {
  let result = [];
  for (let i = 0; i < a1.length; i++) {
    result[i] = a1[i];
  }
  let i = result.length;
  for (let j = 0; j < a2.length; j++) {
    result[i + j] = a2[j];
  }
  return result;
}

function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const arr1 = [3, 5, 1];
const arr2 = [4, 2];

const mergedArray = margeArray(arr1, arr2);
const mergedAndSortArray = sortArray(mergedArray);
console.log(`Expected output: ${mergedAndSortArray}`);
