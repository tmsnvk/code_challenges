// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

// Filter out Strings from an Array
// Create a function that takes an array of non-negative numbers and strings and return a new array without the strings.

const filterArray = arr => {
	const x = [];
	
	for (y of arr) {
		if (Number.isInteger(y)) {
			x.push(y);
		}
	}
	
	return x;
}
