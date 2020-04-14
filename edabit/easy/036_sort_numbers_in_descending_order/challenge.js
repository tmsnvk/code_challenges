// https://edabit.com/challenge/yaXQvCzAXJLe37Qie

// Sort Numbers in Descending Order
// Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. 
// Descending order is when you sort from highest to lowest.
// You can expect non-negative numbers for all test cases.

const sortDescending = num => Number(num.toString().split("").sort().reverse().join(""));
