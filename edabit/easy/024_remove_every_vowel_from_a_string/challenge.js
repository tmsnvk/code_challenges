// https://edabit.com/challenge/DbLp2kHgwQbridSSy

// Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

const removeVowels = str => str.split("").map(x => x.replace(/[aeiou]/gi, "")).join("");
