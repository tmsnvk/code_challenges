// https://edabit.com/challenge/9GcCezhbB3DxoJ6fL

// Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

const isInOrder = str => str === str.split("").sort().join("");
