// https://edabit.com/challenge/rufYqKzTLvDefFmKa

// Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

const toArray = num => Array.from(num.toString()).map(Number);
const toNumber = arr => parseInt(arr.join(""));
