// https://edabit.com/challenge/sq7ZNMhAZ5ao8BMum

// RegEx: Boundary Assertions II
// You are give an array with random words but your program doesn't accept words that begin with the capital letter "C". 
// Remove the unaccepted words and return the new array.

const acceptedWords = arr => arr.filter((word) => !word.startsWith("C"));
