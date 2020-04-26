// https://edabit.com/challenge/fxvceQdv7RHQzrx2J

// Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

const identicalFilter = (arr) => arr.filter((str) => new Set(str).size === 1);
