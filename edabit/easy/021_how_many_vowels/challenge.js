// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

// How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

const countVowels = str => str.match(/[aeiou]/gi).length;
