// https://edabit.com/challenge/j63YSGGK9xoLiXCKF

// Between Words
// Write a function that takes three string arguments (first, last, word) and 
// returns true if (when alphabetically sorted) word is found between first and last.
// All letters will be in lowercase. All three words will be different.

const isBetween = (first, last, word) => word > first && word < last;
