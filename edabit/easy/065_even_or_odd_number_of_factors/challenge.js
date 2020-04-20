// https://edabit.com/challenge/uGKSYufSxtBErTrhd

// Even or Odd Number of Factors
// Create a function that returns "even" if a number has an even number of factors and "odd" 
// if a number has an odd number of factors.

const factorGroup = num => Math.sqrt(num) % 2 === 0 || num === 1 ? "odd" : "even";
