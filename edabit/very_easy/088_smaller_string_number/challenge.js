// https://edabit.com/challenge/uRtubbXsDHLwAz5RS

// Smaller String Number
// Create a function that returns the smaller number.
// Numbers will be represented as strings, and your output should also be a string.
// If both numbers tie, return either number.

const smallerNum = (n1, n2) => {
	Number.parseInt(n1);
	Number.parseInt(n2);
	
	return Math.min(n1, n2).toString();
}
