// https://edabit.com/challenge/bcM99TYJmRv5JnZaA

// Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.
// Not a big deal, your friend says. He writes the following code:

`function checkAllEven(arr) {
  return arr.every(x % 2 === 0)
}`

// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass.

const checkAllEven = arr => arr.every(x => x % 2 === 0);
