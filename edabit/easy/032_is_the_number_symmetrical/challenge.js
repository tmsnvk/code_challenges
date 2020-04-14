// https://edabit.com/challenge/at7jF9Y7SmPGyD92u

// Is the Number Symmetrical?
// Create a function that takes a number as an argument and returns true or false depending on 
// whether the number is symmetrical or not. A number is symmetrical when it is the same as its reverse.

const isSymmetrical = num => num == num.toString().split('').reverse().join('');
