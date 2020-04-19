// https://edabit.com/challenge/ve7mQnJsjtFep97fm

// Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

const countOnes = matrix => matrix.flat().filter(x => x === 1).length;
