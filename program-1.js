// Write a JavaScript program to clone an array.
let arr = [1, 2, 3];
let arrClone = [];

for (let i = 0; i < arr.length; i++) {
  arrClone[i] = arr[i];
}

console.log(arrClone);
