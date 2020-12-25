// https://edabit.com/challenge/yks7uNNSRJFWDuj3m

// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

// Examples
// arrayLessThan100([5, 57]) ➞ true

// arrayLessThan100([77, 30]) ➞ false

// arrayLessThan100([0]) ➞ true

function arrayLessThan100(arr) {
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return arr.reduce(reducer) < 100 ? true : false;
}