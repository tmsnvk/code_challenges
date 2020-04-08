// https://edabit.com/challenge/m6GYKsereS6JdARGW

// Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. 
// Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]

function firstAndLast(s) {
	const x = s.split("");
	const y = x.sort().join("");
	const z = x.sort().reverse().join("");
	
	return [y, z];
}
