// https://edabit.com/challenge/djNxjykvXvKuHvGPZ

// Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

const convertBinary = str => str.toLowerCase().replace(/[a-m]/gi, 0).replace(/[n-z]/gi, 1);
