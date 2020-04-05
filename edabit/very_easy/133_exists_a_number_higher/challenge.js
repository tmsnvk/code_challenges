// https://edabit.com/challenge/77zq4RhMgWup22H6d

// Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

const existsHigher = (arr, n) => arr.some(e => Math.max(...arr) >= n);
