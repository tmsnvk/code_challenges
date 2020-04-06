// https://edabit.com/challenge/zvFri3sia4iNPTeqC

// Palindrome?
// A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak

// Given a word, create a function that checks whether it is a palindrome.

const checkPalindrome = str => str === str.split("").reverse().join("");
