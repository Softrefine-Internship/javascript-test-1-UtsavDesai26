// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function insertDashesBetweenEvenNumbers(num) {
  let result = "";

  for (let i = 0; i < num.length; i++) {
    const digit = parseInt(num[i]);

    if (digit % 2 === 0) {
      if (i !== 0 && parseInt(num[i - 1]) % 2 === 0) {
        result += `-${digit}`;
      } else {
        result += digit;
      }
    } else {
      result += digit;
    }
  }

  return result;
}

const sampleInput = "025468";
const result = insertDashesBetweenEvenNumbers(sampleInput);
console.log(`Expected output: ${result}`);
