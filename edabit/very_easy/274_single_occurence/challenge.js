// https://edabit.com/challenge/YNb2MDmxDyJNHDMG8

// Create a function that, given a string str, finds a letter that has a single occurrence. Return the letter in uppercase. If the input is empty, return an empty string "".

// Examples
// singleOccurrence("EFFEAABbc") ➞ "C"

// singleOccurrence("AAAAVNNNNSS") ➞ "V"

// singleOccurrence("S") ➞ "S"

const singleOccurrence = (str) => [...str.toUpperCase()].filter((val, i, arr) => arr.indexOf(val) === arr.lastIndexOf(val)).join('');