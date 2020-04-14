// https://edabit.com/challenge/Ysk5M8XAscc4fqaAi

// Valid Zip Code
// Zip codes consist of 5 consecutive digits. 
// Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

const isValid = zip => zip.length === 5 && Number(zip) ? true : false;
