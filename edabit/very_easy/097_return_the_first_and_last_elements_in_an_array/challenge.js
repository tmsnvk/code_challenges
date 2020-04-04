// https://edabit.com/challenge/R3AYf3eTdATXTQTdZ

// Return the First and Last Elements in an Array
// Create a function that takes an array of numbers and return the first and last elements as a new array.

const firstLast = arr => {
	const x = arr.shift();
	const y = arr.pop();
	
	return [x, y];
}
