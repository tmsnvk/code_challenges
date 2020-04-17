// https://edabit.com/challenge/Twbmxzd3JwkkqAWES

// Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.

// Create a function that determines whether an input value is omnipresent for a given array.

const isOmnipresent = (arr, val) => arr.every(x => x.includes(val));
