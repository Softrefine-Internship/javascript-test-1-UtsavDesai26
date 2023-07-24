// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]

function removeDuplicate(array) {
  let result = [];
  let uniqueObject = {};

  for (let i = 0; i < array.length; i++) {
    let uniqueTitle = array[i].title;
    uniqueObject[uniqueTitle] = array[i];
  }

  for (let key in uniqueObject) {
    result.push(uniqueObject[key]);
  }

  return result;
}

array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

const result = removeDuplicate(array);
console.log("Expected Output:", result);
