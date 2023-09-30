// Write a JavaScript program to find the most frequent item in an array.

// Sample imput : [1, 2, 2, 3, 4, 4];
// Expected Output : console.log(2, "2 times" and 4, "2 times")

// <-------------- Befor optimized code -------------->

// function mostFrequent(array) {
//   if (array.length === 0) {
//     console.log("Array is empty.");
//     return;
//   }

//   let frequencyMap = {};
//   let maxFrequency = 0;
//   let mostFrequentItem;

//   for (let i = 0; i < array.length; i++) {
//     mostFrequentItem = array[i];
//     if (frequencyMap[mostFrequentItem]) {
//       frequencyMap[mostFrequentItem]++;
//     } else {
//       frequencyMap[mostFrequentItem] = 1;
//     }
//     if (frequencyMap[mostFrequentItem] > maxFrequency) {
//       maxFrequency = frequencyMap[mostFrequentItem];
//     }
//   }

//   for (const item in frequencyMap) {
//     if (frequencyMap[item] === maxFrequency) {
//       console.log(`${item}, "${maxFrequency} times"`);
//     }
//   }
// }

// <-------------- After optimized code -------------->

function mostFrequent(array) {
  const frequencyMap = new Map();
  let maxFrequency = 0;

  array.forEach((item) => {
    if (frequencyMap.has(item)) {
      frequencyMap.set(item, frequencyMap.get(item) + 1);
    } else {
      frequencyMap.set(item, 1);
    }
    if (frequencyMap.get(item) > maxFrequency) {
      maxFrequency = frequencyMap.get(item);
    }
  });

  frequencyMap.forEach((value, key) => {
    if (value === maxFrequency) {
      console.log(`${key}, "${maxFrequency} times"`);
    }
  });
}

const inputArray = [1, 2, 2, 3, 4, 4, 5, 5];
mostFrequent(inputArray);
