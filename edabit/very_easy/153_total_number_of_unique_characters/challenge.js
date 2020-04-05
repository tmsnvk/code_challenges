// https://edabit.com/challenge/ceHuvcrXpKF6Ev4Nc

// Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(s1, s2) {
	const x = s1.concat(s2);
	let y = [...new Set(x)];

	return y.length;
}
