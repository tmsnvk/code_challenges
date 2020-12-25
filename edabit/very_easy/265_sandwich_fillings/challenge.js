// https://edabit.com/challenge/W8z2EghwmjQYhwM2D

// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// Examples
// getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]

// getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]

// getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]

const getFillings = (sandwich) => sandwich.slice(1, sandwich.length - 1);