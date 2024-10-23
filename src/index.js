function checkEvenOdd(num) {
  if (num % 2 === 0) {
      return `${num} is even.`;
  } else {
      return `${num} is odd.`;
  }
}

// Example usage
console.log(checkEvenOdd(4)); // Output: 4 is even.
console.log(checkEvenOdd(7)); // Output: 7 is odd.