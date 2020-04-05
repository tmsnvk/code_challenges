// https://edabit.com/challenge/dzdoYrTL5vws4dFud

// Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. 
// In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
	const x = arr[1] - arr[0];
	const y = arr[arr.length - 1] + x;
	
	return y;
}
