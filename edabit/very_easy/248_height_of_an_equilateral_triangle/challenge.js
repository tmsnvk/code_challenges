// https://edabit.com/challenge/CzYisnM5k7ndRPbey

// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

// Examples
// height(2) ➞ 17.3 mm

// height(5) ➞ 43.3 mm

// height(6.2) ➞ 53.7 mm

const height = (side) => `${(10 * (side * Math.sqrt(3) / 2)).toFixed(1)} mm`;