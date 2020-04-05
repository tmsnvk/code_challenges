// https://edabit.com/challenge/reR3jdfJnREauJj8d

// Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

const sum = arr => {
	if (arr.length === 0) return 0;
	
	const r = (a, c) => a + c;
	
	return arr.reduce(r);
}
