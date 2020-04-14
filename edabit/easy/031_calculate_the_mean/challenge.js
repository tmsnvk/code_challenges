// https://edabit.com/challenge/8zBhNfrQv7CWKvcx3

// Calculate the Mean
// Create a function that takes an array of numbers and returns the mean value.
// Round to two decimal places.

const mean = arr => {
	let x = 0;
	
	for (y of arr) {
		x += y;
	}
	
	return parseFloat((x / arr.length).toFixed(2));
}
