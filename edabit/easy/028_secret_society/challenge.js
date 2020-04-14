// https://edabit.com/challenge/zQm9YZTTFPhNtYjDr

// Secret Society
// A group of friends have decided to start a secret society. 
// The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// The secret society's name should be entirely uppercased.

const societyName = friends => friends.sort().map(x => x.slice(0, 1).toUpperCase()).join("");
