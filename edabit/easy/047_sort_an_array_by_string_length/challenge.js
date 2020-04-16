// https://edabit.com/challenge/Gz27eKkMcLarzE5Rj

// Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.
// All test cases contain arrays with strings of different lengths, 
// so you won't have to deal with multiple strings of the same length.

const sortByLength = arr => arr.sort((a, b) => a.length - b.length);
