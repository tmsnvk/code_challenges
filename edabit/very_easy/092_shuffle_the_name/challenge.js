// https://edabit.com/challenge/eitMRpuJR3Ls4zQsn

// Shuffle the Name
// Create a function that accepts a string (of a persons first and last name) and 
// returns a string with the first and last name swapped.

const nameShuffle = str => {
	const x = str.split(" ");
	const y = x.reverse().join(" ");
	
	return y;
}
