// https://edabit.com/challenge/PBXe4hLP3mbbMEFt8

// Return the Highest and Lowest Numbers
// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).

const highLow = str => Math.max(...str.split(' ')) + ' ' + Math.min(...str.split(' '));
