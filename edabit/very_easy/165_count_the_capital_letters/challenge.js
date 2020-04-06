// https://edabit.com/challenge/tkFfKQJzcuaDysDyY

// Count the Capital Letters
// Given a string of letters, how many capital letters are there?

const capitalLetters = str => str.length - str.replace(/[A-Z]/g, '').length; 
