// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

// Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

const reverseCase = str => [...str].map(x => x.toLowerCase() == x ? x.toUpperCase() : x.toLowerCase()).join("");
