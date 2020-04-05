// https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb

// Little Dictionary
// Create a function that takes in an initial word and 
// filters out an array to contain words that start with the same letters as the initial word.

const dictionary = (initial, words) => words.filter(x => x.startsWith(initial));
