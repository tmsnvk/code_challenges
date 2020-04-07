// https://edabit.com/challenge/BsCHQ6fyzmrTYLNsR

// Even Odd Partition
// Write a function that partitions the array into two subarrays: 
// one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]

// Return two empty subarrays if the input is an empty array.
// Keep the same relative ordering as the original array.

const evenOddPartition = arr => {
	const x = [[], []];
	
	for (y of arr) {
		if (y % 2 === 0) {
			x[0].push(y);
		}
		if (y % 2 !== 0) {
			x[1].push(y);
		}
	}
	
	return x;
}
