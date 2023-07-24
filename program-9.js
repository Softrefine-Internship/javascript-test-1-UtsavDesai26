// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

function mostFrequent(array) {
  let mostfrequent = 1;
  let count = 0;
  let item;

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
      if (mostfrequent < count) {
        mostfrequent = count;
        item = array[i];
      }
    }
    count = 0;
  }
  console.log(`${item}, "${mostfrequent} times"`);
}

const inputArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
mostFrequent(inputArray);
