// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) 
// is found in the second string.

const charCount = (myChar, str) => {
	const y = str.split("");
	const z = y.filter(x => x === myChar);
	return z.length;
}
