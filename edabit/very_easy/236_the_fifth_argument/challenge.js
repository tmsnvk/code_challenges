// https://edabit.com/challenge/ATFL4pNx3KTJzinAm

// Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".

// Examples
// fifth(1, 2, 3, 4, 5) ➞ "number"

// fifth("a", 2, 3, true, "five") ➞ "string"

// fifth() ➞ "Not enough arguments"

const fifth = (arg1, arg2, arg3, arg4, arg5) => arg5 === undefined ? "Not enough arguments" : typeof arg5;