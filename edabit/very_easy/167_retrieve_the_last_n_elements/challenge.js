// https://edabit.com/challenge/S6zpG8RwDrxaFEQLE

// Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.
// Return "invalid" if n exceeds the length of the array.
// Return an empty array if n == 0.

function last(a, n) {
	if (n === 0) return [];
	if (n > a.length) return "invalid";
	
	return a.slice(-n);
}
