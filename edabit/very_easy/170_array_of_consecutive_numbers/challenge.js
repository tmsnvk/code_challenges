// https://edabit.com/challenge/v5TorwH9tiNtddSY3

// Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order 
// from the given value low up to the given value high (bounds included).

function getSequence(low, high) {
	const x = [];
	
	for (let i = low; i <= high; i++) {
		x.push(i);
	}
	
	return x;
}
