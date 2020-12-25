// https://edabit.com/challenge/fZqTozX8XHZxqcdA8

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

// Examples
// inchesToFeet(324) ➞ 27

// inchesToFeet(12) ➞ 1

// inchesToFeet(36) ➞ 3

const inchesToFeet = (inches) => inches >= 12 ? inches / 12 : 0;