// https://edabit.com/challenge/wikfKaQm3zP7buRA4

// Special Arrays
// An array is special, if every even index contains an even number and every odd index contains an odd number. 
// Create a function that returns true if an array is special, and false otherwise.

const isSpecialArray = arr => {
	for (let i = 0; i < arr.length; i += 2) {
		if (arr[i] % 2 !== 0) { return false; }
	}
	
	for (let j = 1; j < arr.length; j += 2) {
		if (arr[j] % 2 == 0) { return false; }
	}
	
	return true;
}
