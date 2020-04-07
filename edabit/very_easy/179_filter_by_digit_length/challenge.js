// https://edabit.com/challenge/RXNybvGHLuvFiWKvq

// Filter by Digit Length
// Create a function that filters out an array to include numbers who only have a certain number of digits.
// If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return original array.

const filterDigitLength = (arr, num) => arr.filter(x => x.toString().length === num);
