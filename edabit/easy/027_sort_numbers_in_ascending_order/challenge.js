// https://edabit.com/challenge/SS23vniCZ6ssGwsQP

// Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).
// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

const sortNumsAscending = arr => arr === null || arr === [] ? [] : arr.sort((a, b) => a - b);
