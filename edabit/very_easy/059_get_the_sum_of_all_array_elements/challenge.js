// https://edabit.com/challenge/y6dMjvNaPXXNKeBRQ

// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
	let total = 0;
	for (i in arr) {
		total += arr[i];
	}
	return total;
}
