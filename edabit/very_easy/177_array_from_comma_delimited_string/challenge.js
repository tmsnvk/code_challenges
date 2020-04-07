// https://edabit.com/challenge/LHTF9ij2FtvwhnzQF

// Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

const toArray = str => (str.length == 0) ? [] : str.split(", ");
