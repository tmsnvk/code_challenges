// https://edabit.com/challenge/bnZzPk2QuWr4w5HuZ

// Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

const isIdentical = s => {
	const x = (cur) => cur === s[0];
	
	return s.split("").every(x);	
}
